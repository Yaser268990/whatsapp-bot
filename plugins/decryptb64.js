/* Copyright (C) 2022 RIPPER-SER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
https://github.com/RIPPER-SER/bixbymowl
*/

const Bixby = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const b64 = "فك تشفير النص باستخدام base64"

const usage = ".b64de <النص>"

const encypt = "```أدخل النص المشفر الذي تريد فك تشفيره!```"

Bixby.addCommand({ pattern: 'b64de ?(.*)', fromMe: false, desc: b64, usage: usage }, async (message, match) => {

        const Wtb = match[1] /*dont copy without credit cheythal i will kill*/
        
        if (match[1] === '') return await message.client.sendMessage(message.jid, encypt, MessageType.text);

        await axios
          .get(`https://xteam.xyz/encrypt/b64dec?APIKEY=ab9942f95c09ca89&text=${Wtb}`)
          .then(async (response) => {
            const {
              status,
              result,
            } = response.data

            const msg = `*حالة الإتصال ✔:* ${status}\n\n\n *نص منحرف:* ${result}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )










