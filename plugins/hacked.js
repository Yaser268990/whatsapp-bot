const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const con = require('../config');

// Descriptions
const ENGAY = "اخترق الشخص الذي ترد عليه."

// Need Reply
const ENREP = "```يجب عليك الرد على رسالة!```"


if (con.WORKTYPE === 'private') {
    
    Asena.addCommand({pattern: 'hack', fromMe: true, OnlyGroup: true, desc: ENGAY}, (async (message, match) => {
    
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

    await message.client.sendMessage(message.jid, '*جاري تهكير*' + '@' + message.reply_message.jid.split('@')[0] + '... >:)', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

    await new Promise(r => setTimeout(r, 1500));
    await message.sendMessage('Python Version: 3.6\nHacker: *BOT*\nWEB API: True');
    await new Promise(r => setTimeout(r, 1200));
    await message.sendMessage('██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗\n██║\n██║\n██║\n██║\n╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░');

    await new Promise(r => setTimeout(r, 1500));

    await message.sendMessage('*¡يتم اختراق النظام المستهدف الآن!!*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 1%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 3%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 6%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 1%\nℂá𝕞𝕒𝕣𝕒: 3%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*عملية التشغيل...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 18%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 25%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 34%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 16%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*اختراق أمن النظام*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 48%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 44%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 57%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 62%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*القضاء على أعطال النظام...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 68%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 84%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 92%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 89%\nℂá𝕞𝕒𝕣𝕒: 86%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*الاتصال بحساب الوجهة من خلال WhatsApp WEB API*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 93%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 90%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 88%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 94%\nℂá𝕞𝕒𝕣𝕒: 96%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('😈 *تم تهكير الحساب*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 100%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 100%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 100%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 100%\nℂá𝕞𝕒𝕣𝕒: 100%');

    await new Promise(r => setTimeout(r, 2500));

    await message.sendMessage('*¡المعلومات المحفوظة في قاعدة بيانات YASER BOT! >:D*');

}));

Asena.addCommand({pattern: 'chocolate', fromMe: true, OnlyGroup: true}, (async (message, match) => {

    await message.sendMessage('{__/}\n( • - • )\n/>🍫 أعطيك شوكولاتة');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n🍫 <   أم لا. لديك بالفعل');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>🍫 لا أستطيع التضحية بك...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>☕️ من الأفضل أن أعطيك هذا');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ خذ هذا أيضًا ولكن لا تكسره من فضلك');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 قلت لا تكسرها');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n💔< يجب أن تكون آسف لأنك فعلت..');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/> ❤️ أو تأخذ آخر...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 أكرهك');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ خذ هذا مرة أخرى ولكن إذا كسرته ستغضب');
    await new Promise(r => setTimeout(r, 1800));

    await message.sendMessage('Made by *YASER BOT* >:D');

}));
}
    
else if (con.WORKTYPE === 'public') {
    
    Asena.addCommand({pattern: 'hack', fromMe: false, OnlyGroup: true, desc: ENGAY}, (async (message, match) => {
    
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

    await message.client.sendMessage(message.jid, '*جاري تهكير*' + '@' + message.reply_message.jid.split('@')[0] + '... >:)', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

    await new Promise(r => setTimeout(r, 1500));
    await message.sendMessage('Python Version: 3.6\nHacker: *BOT*\nWEB API: True');
    await new Promise(r => setTimeout(r, 1200));
    await message.sendMessage('██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗\n██║\n██║\n██║\n██║\n╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░');

    await new Promise(r => setTimeout(r, 1500));

    await message.sendMessage('*¡يتم اختراق النظام المستهدف الآن!*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 1%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 3%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 6%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 1%\nℂá𝕞𝕒𝕣𝕒: 3%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*عملية التشغيل...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 18%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 25%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 34%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 16%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*اختراق أمن النظام*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 48%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 44%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 57%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 62%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*القضاء على أعطال النظام...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 68%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 84%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 92%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 89%\nℂá𝕞𝕒𝕣𝕒: 86%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*الاتصال بحساب الوجهة من خلال WhatsApp WEB API*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 93%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 90%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 88%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 94%\nℂá𝕞𝕒𝕣𝕒: 96%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('😎 *تم تهكير الحساب*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 100%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 100%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 100%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 100%\nℂá𝕞𝕒𝕣𝕒: 100%');

    await new Promise(r => setTimeout(r, 2500));

    await message.sendMessage('*¡المعلومات المحفوظة في قاعدة بيانات YASER BOT! >:D*');

}));

Asena.addCommand({pattern: 'chocolate', fromMe: false, OnlyGroup: true}, (async (message, match) => {

    await message.sendMessage('{__/}\n( • - • )\n/>🍫 أعطيك شوكولاتة');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n🍫<   أم لا. لديك بالفعل');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>🍫 لا أستطيع التضحية بك...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>☕️ من الأفضل أن أعطيك هذا');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ خذ هذا أيضًا ولكن لا تكسره من فضلك');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 قلت لا تكسرها');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n💔< يجب أن تكون آسف لأنك فعلت...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/> ❤️ أو تأخذ آخر...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 أكرهك');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ خذ هذا مرة أخرى ولكن إذا كسرته ستغضب');
    await new Promise(r => setTimeout(r, 1800));

    await message.sendMessage('Made by *YASER-BOT* >:D');

}));
}
