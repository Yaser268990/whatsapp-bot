/* Copyright (C) 2022 RIPPER-SER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
https://github.com/RIPPER-SER/bixbymowl
*/

const Bixby = require('../events');

const config = require('../config');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

Bixby.addCommand({pattern: 'look', fromMe: false, desc: 'ترسل قائمة البوت'}, (async (message, match) => {

    var r_text = new Array ();

    



    var i = Math.floor(80*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''

  

    var antilink = ''

     

    var pinky = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*صباح الخير ⛅*'

if (hrs >= 12 && hrs <= 17) wish = '*طاب مسائك 🌞*'

if (hrs >= 17 && hrs <= 19) wish = '*مساء الخير 🌥*'

if (hrs >= 19 && hrs <= 24) wish = '*طاب مسائك 🌙*'

if (config.TALKING_PINKY == 'true') pinky = 'On'

if (config.TALKING_PINKY == 'false') pinky = 'Off'

if (config.AUTOBİO == 'true') auto_bio = 'On'

if (config.AUTOBİO == 'false') auto_bio = 'Off'

if (config.ANTİLİNK == 'true') antilink = 'On'

if (config.ANTİLİNK == 'false') antilink = 'Off'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮

   ` + config.BOT + `

╭──────────────────╯

│

│ ʜᴇʏ ᴜsᴇʀ ` + wish + `

│         *⌚` + time + `*

│

┣𝕾⃝🌺 *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ~YASER BOT~

┣𝕾⃝🌺 *Antilink* : ` + antilink + `

┣𝕾⃝🌺 *ғᴜʟʟ ᴇᴠᴀ* : ` + pinky + `

┣𝕾⃝🌺 *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `

┣𝕾⃝🌺 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ

┣𝕾⃝🌺 *ᴘʀᴇғɪx* : *. ; !*

│



│       

│

╰──────────────────╮

  

╭──────────────────╯

│ ◩ ᴍᴇɴᴜ ◪

╭──────────────────╯

│

│[ ᴍᴇᴅɪᴀ ]

│

┣𝕾⃝🌺 .sᴏɴɢ

┣𝕾⃝🌺 .ᴠɪᴅᴇᴏ

┣𝕾⃝🌺 .ɪɴsᴛᴀ

┣𝕾⃝🌺 .ʏᴛ

│         

│[ ᴄᴏɴᴠᴇʀᴛ ]

│

┣𝕾⃝🌺 .ɢɪғ

┣𝕾⃝🌺 .ᴍᴘ3

┣𝕾⃝🌺 .ᴛᴛs

┣𝕾⃝🌺 .ɪᴍɢ

┣𝕾⃝🌺 .sᴛɪᴄᴋᴇʀ

┣𝕾⃝🌺 .ᴀᴛᴛᴘ

┣𝕾⃝🌺 .ᴛᴛᴘ

┣𝕾⃝🌺 .ᴘʜᴏᴛᴏ

┣𝕾⃝🌺 .2ɪᴍɢ

│

│[ ᴍᴀᴋᴇʀ ]

│

┣𝕾⃝🌺 .ʟᴏɢᴏ

┣𝕾⃝🌺 .ᴍᴏʀᴇᴛxᴛ

┣𝕾⃝🌺 .ᴍᴍᴘᴀᴄᴋ

┣𝕾⃝🌺 .ᴍᴀᴋᴇʀᴍᴇɴᴜ

┣𝕾⃝🌺 .ᴛxᴛɪᴛ

│ 

│[ ғᴜɴ ]

│

┣𝕾⃝🌺 .ᴊᴏᴋᴇ

┣𝕾⃝🌺 .ᴍᴇᴍᴇ

┣𝕾⃝🌺 .ǫʀ

┣𝕾⃝🌺 .ᴄʜᴀɴɢᴇsᴀʏ

┣𝕾⃝🌺 .ᴛʀᴜᴍᴘsᴀʏ

┣𝕾⃝🌺 .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ

│

│[ sᴇᴀʀᴄʜ ]

│ 

┣𝕾⃝🌺 .ᴡɪᴋɪ

┣𝕾⃝🌺 .ʟʏʀɪᴄ

┣𝕾⃝🌺 .sʜᴏᴡ

┣𝕾⃝🌺 .ᴍᴏᴠɪᴇ

┣𝕾⃝🌺 .ᴡᴇᴀᴛʜᴇʀ

│

│[ ᴛᴀɢ ]

│

┣𝕾⃝🌺 .ᴛᴀɢᴀʟʟ

┣𝕾⃝🌺 .ᴛᴀɢᴀᴅᴍɪɴ

│

│[ ᴏᴛʜᴇʀ ]

│ 

┣𝕾⃝🌺 .ᴀɴɪᴍᴇ

┣𝕾⃝🌺 .ᴡᴀʟʟᴘᴀᴘᴇʀ

┣𝕾⃝🌺 .ss

┣𝕾⃝🌺 .ᴅɪᴄᴛ

┣𝕾⃝🌺 .sʜᴏʀᴛ

┣𝕾⃝🌺 .ᴛʀᴛ

┣𝕾⃝🌺 .ʀᴇᴍᴏᴠᴇʙɢ

│ 

│[ ᴏᴡɴᴇʀ ᴄᴍɴᴅs ]

│

┣𝕾⃝🌺 .ғᴜʟʟᴇᴠᴀ 

┣𝕾⃝🌺 .ᴀᴜᴛᴏʙɪᴏ

┣𝕾⃝🌺 .ʙᴀɴ

┣𝕾⃝🌺 .ᴀᴅᴅ

┣𝕾⃝🌺 .ᴘʀᴏᴍᴏᴛᴇ

┣𝕾⃝🌺 .ᴅᴇᴍᴏᴛᴇ

┣𝕾⃝🌺 .ᴍᴜᴛᴇ

┣𝕾⃝🌺 .ᴜɴᴍᴜᴛᴇ

┣𝕾⃝🌺 .ɪɴᴠɪᴛᴇ

┣𝕾⃝🌺 .sᴇᴛᴠᴀʀ

│ 

│

│   ❏©YASER BOT❏

╰──────────────────╯

`}) 

}));
