const Bixby = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "يرسل رابط نشر الروبوت"

const GN = "يرسل رابط نشر الروبوت"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

Bixby.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "*https://github.com/Yaser268990/whatsapp-bot*"; 
 
    var i = Math.floor(1*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));
    

    }

    if (Config.WORKTYPE == 'public') {

        Bixby.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

                 r_text[0] = "*https://github.com/Yaser268990/whatsapp-bot*"; 

                     var i = Math.floor(1*Math.random())

                         await message.client.sendMessage(

                               message.jid,(r_text[i]), MessageType.text);

    }));
    

   }
