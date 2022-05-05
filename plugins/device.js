/* Copyright © RIPPER-SER*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*تفاصيل البحث*"
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE , dontAddCommandList: true }, async (message, match) => {
    
const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=a9a05974d30e`)
const { status, result } = data
if(!status) return await message.sendMessage('not found')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
let msg = '```'
msg +=  `NAME          :${result.judul}\n\n`
msg +=  `DATE          :${result.rilis}\n\n`
msg +=  `WEIGHT        :${result.ukuran}\n\n`
msg +=  `VERSION       :${result.type}\n\n`
msg +=  `ROM           :${result.storage}\n\n`
msg +=  `DISPLAY       :${result.display}\n\n`
msg +=  `RAM           :${result.ram}\n\n`
msg += `BATTERY        :${result.batrai}\n\n`
msg += `CPU            :${result.chipset}\n\n`
msg += `INCH           :${result.inchi}\n\n`
msg += `VIDEO MP       :${result.videoPixel}\n\n`
msg += `PIC            :${result.thumb}\n\n`
msg += `BATTERY BRAND  :${result.pixel}\n\n`
msg += '```'
 return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
});
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE , dontAddCommandList: true }, async (message, match) => {
    
        const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=a9a05974d30e`)
        const { status, result } = data
        if(!status) return await message.sendMessage('not found')
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `الاسم          :${result.judul}\n\n`
        msg +=  `تاريخ          :${result.rilis}\n\n`
        msg +=  `وزن        :${result.ukuran}\n\n`
        msg +=  `الاصدار       :${result.type}\n\n`
        msg +=  `ذاكرة للقراءة فقط           :${result.storage}\n\n`
        msg +=  `عرض       :${result.display}\n\n`
        msg +=  ` الذاكرة العشوائية           :${result.ram}\n\n`
        msg += `البطارية        :${result.batrai}\n\n`
        msg += `المعالج            :${result.chipset}\n\n`
        msg += `بوصة           :${result.inchi}\n\n`
        msg += `فديو MP       :${result.videoPixel}\n\n`
        msg += `صورة           :${result.thumb}\n\n`
        msg += `البطارية BRNAD  :${result.pixel}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
        });
    }
