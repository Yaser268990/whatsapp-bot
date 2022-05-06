/* Copyright (C) 2022 RIPPER-SER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
https://github.com/RIPPER-SER/bixbymowl
*/

const Bixby = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*أضف رابطًا بعد الأمر💌*"

if (Config.WORKTYPE == 'private') {

  Bixby.addCommand({ pattern: 'pdf ?(.*)', fromMe: true, desc: 'احصل على لقطة شاشة للروابط في ملف pdf'}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var rashi = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(rashi.data), MessageType.document, { filename: 'YASER BOT.pdf', mimetype: Mimetype.pdf});

  }));
}

else if (Config.WORKTYPE == 'public') {

  Bixby.addCommand({ pattern: 'pdf ?(.*)', fromMe: false, desc: 'احصل على لقطة شاشة للروابط في ملف pdf'}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var rashi = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(rashi.data), MessageType.document, {quoted: message.data, filename: 'YASER BOT.pdf', mimetype: Mimetype.pdf});

  }));

}
