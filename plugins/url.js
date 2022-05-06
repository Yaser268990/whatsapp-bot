const Bixby = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

let ziyan = Config.WORKTYPE == 'public' ? false : true
Bixby.addCommand({pattern: 'url ?(.*)', fromMe: ziyan}, async (message, match) => {

    await message.sendMessage('استخدم هذا الموقع للحصول على URL 👇:\n\n https://souravkl11.github.io/image-uploader/')

        });
