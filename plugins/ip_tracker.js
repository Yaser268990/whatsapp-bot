const Bixby = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

// List
const IPSTATUS_DESC = "يرسل تفاصيل IP الخاصة بك"
const NEED_IP = "*أدخل عنوان IP الخاص بك..!*"
const IP = "IP :"
const ST = "الحالة :"
const CONTINENT = "القارة :"
const COUNTRY = "الدولة :"
const COUNTRYCODE = "الرقم الدولي :"
const REGIONNAME = "اسم المنطقة :"
const CITY = "المدينة :"
const ZIP = "ZIP :"
const CURRENCY = "العملة :"
const ISP = "مزود خدمة الإنترنت :"
const MOBILE = "التليفون المحمول :"
const PROXY = "الوكيل :"
const NOT_FOUNDIP = "```آسف ، لم أستطع IP الخاص بك 😖```"

if (Config.WORKTYPE == 'private') {

  Bixby.addCommand({pattern: 'ip ?(.*)', desc: 'gives you the detail of your IP' ,fromMe: true}, async (message, match) => {

    if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }

    if (match[1] === '') return await message.reply(NEED_IP);
	const url = `https://api.techniknews.net/ipgeo/${match[1]}`;
	try {
		const response = await got(url);
		const ipjson = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔴 ' + IP +'* ```' + match[1] + '```\n\n' +
		'*✅' + ST +'* ```' + ipjson.status+ '```\n' +
        '*🌐' + CONTINENT +'* ```' + ipjson.continent+ '```\n' +
        '*🗺' + COUNTRY +'* ```' + ipjson.country+ '```\n' +
        '*🔢' + COUNTRYCODE +'* ```' + ipjson.countryCode+ '```\n' +
        '*🌍' + REGIONNAME +'* ```' + ipjson.regionName+ '```\n' +
        '*🚩' + CITY +'* ```' + ipjson.city+ '```\n' +
        '*🏛' + ZIP +'* ```' + ipjson.zip+ '```\n' +
        '*💸' + CURRENCY +'* ```' + ipjson.currency+ '```\n\n' +
        '*📡' + ISP +'* ```' + ipjson.isp+ '```\n' +
        '*🛡' + PROXY +'* ```' + ipjson.proxy+ '```\n' +
        '*📱' + MOBILE +'* ```' + ipjson.mobile+ '```\n', MessageType.text);
	} 
    catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDIP, MessageType.text);
	}
 });
}	
else if (Config.WORKTYPE == 'public') {

  Bixby.addCommand({pattern: 'ip ?(.*)', desc: 'يمنحك تفاصيل عنوان IP الخاص بك' ,fromMe: false}, async (message, match) => {

    if (message.jid === '966502948769@g.us') {

                return;
            }

    if (match[1] === '') return await message.reply(NEED_IP);
	const url = `https://api.techniknews.net/ipgeo/${match[1]}`;
	try {
		const response = await got(url);
		const ipjson = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔴 ' + IP +'* ```' + match[1] + '```\n\n' +
		'*✅' + ST +'* ```' + ipjson.status+ '```\n' +
        '*🌐' + CONTINENT +'* ```' + ipjson.continent+ '```\n' +
        '*🗺' + COUNTRY +'* ```' + ipjson.country+ '```\n' +
        '*🔢' + COUNTRYCODE +'* ```' + ipjson.countryCode+ '```\n' +
        '*🌍' + REGIONNAME +'* ```' + ipjson.regionName+ '```\n' +
        '*🚩' + CITY +'* ```' + ipjson.city+ '```\n' +
        '*🏛' + ZIP +'* ```' + ipjson.zip+ '```\n' +
        '*💸' + CURRENCY +'* ```' + ipjson.currency+ '```\n\n' +
        '*📡' + ISP +'* ```' + ipjson.isp+ '```\n' +
        '*🛡' + PROXY +'* ```' + ipjson.proxy+ '```\n' +
        '*📱' + MOBILE +'* ```' + ipjson.mobile+ '```\n', MessageType.text);
	} 
    catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDIP, MessageType.text);
	}
 });
}
