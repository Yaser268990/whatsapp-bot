/* Copyright (C) 2021 farhan-dqz
coded for Bixbymwol
*/

const Bixby = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var BGM_on = ''
    var BGM_off = ''
    var STICKER_on = ''
    var STICKER_off = ''

    if (config.LANG == 'EN') {
        l_dsc = 'قم بتشغيل وإيقاف تشغيل bgm. - أمر مالك الروبوت'
        Y_dsc = 'قم بتشغيل وإيقاف تشغيل bgm. - أمر مالك الروبوت'
        BGM_on = 'تم تشغيل خيار bgm!'
        BGM_off = 'تم إيقاف تشغيل خيار bgm'
        STICKER_on = 'تم تشغيل خيار الملصق!'
        STICKER_off = 'تم إيقاف خيار STICKER'
        P_dsc = 'تشغيل وإيقاف تشغيل مكافحة الكلمات السيئة لإزالة الأعضاء عند استخدامهم للكلمات السيئة'        
    }
    if (config.LANG == 'ML') {
        l_dsc = 'bgm ഓണാക്കുക അല്ലെങ്കിൽ ഓഫ് ചെയ്യുക. -ബോട്ട് ഉടമ കമാൻഡ്'
        Y_dsc = 'bgm ഓണാക്കുക അല്ലെങ്കിൽ ഓഫ് ചെയ്യുക. -ബോട്ട് ഉടമ കമാൻഡ്'        
        BGM_on = 'bgm ഓപ്ഷൻ ഓണാക്കി'
        BGM_off = 'bgm ഓപ്ഷൻ ഓഫാക്കി'
        STICKER_on = 'STICKER option turned on!'
        STICKER_off = 'STICKER option turned off'
        
    }
    Bixby.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: l_dsc, usage: '.bgm on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));

    Bixby.addCommand({pattern: 'autosticker ?(.*)', fromMe: true, desc: Y_dsc, usage: '.sticker on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'false'
                    } 
                });
                await message.sendMessage(STICKER_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'true'
                    } 
                });
                await message.sendMessage(STICKER_on)
        }
    }));

    Bixby.addCommand({ pattern: 'sudo ?(.*)', fromMe: true, desc: 'يغير أرقام sudo', usage: '.sudo *رقمك*' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('بحاجة الى رقم')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['SUDO']: match[1]
            }
        });
        await message.sendMessage("تم تحديث SUDO الجديد")
    }));

    Bixby.addCommand({ pattern: 'caption ?(.*)', fromMe: true, desc: 'changes all captions', usage: '.caption *Made by Yaser*' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('بحاجة إلى تسمية توضيحية')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['ALL_CAPTION']: match[1]
            }
        });
        await message.sendMessage("تم تحديث التسمية التوضيحية الجديدة")
    }));

    Bixby.addCommand({ pattern: 'number ?(.*)', fromMe: true, desc: 'change user number', usage: '.number *Made by Yaser*' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('بحاجة الى رقم 919895xxxx')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['NUMBER']: match[1]
            }
        });
        await message.sendMessage("تم إلغاء رقم مستخدم جديد")
    }));

    Bixby.addCommand({ pattern: 'deployer ?(.*)', fromMe: true, desc: 'غير اسم المستخدم', usage: '.deployer *Made by Yaser*' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('بحاجة الى اسم')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['DEPLOYER']: match[1]
            }
        });
        await message.sendMessage("تم تحديث اسم المستخدم الجديد")
    }));

    Bixby.addCommand({ pattern: 'handlers ?(.*)', fromMe: true, desc: 'معالجات التغييرات', usage: '.handler ^[.!] ' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('NEED A CAPTION')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['ALL_CAPTION']: match[1]
            }
        });
        await message.sendMessage("معالج جديد محدث")
    }));


    Bixby.addCommand({ pattern: 'botname ?(.*)', fromMe: true, desc: 'تغيير اسم الروبوت الخاص بك', usage: '.botname *اسم البوت* ' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('اكتب اسم الروبوت الجديد الخاص بك')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['BOT_NAME']: match[1]
            }
        });
        await message.sendMessage("تم تحديث اسم BOT الجديد")
    }));

Bixby.addCommand({ pattern: 'theri  ?(.*)', fromMe: true, desc: 'تغيير أوامرك', usage: '.theri command,command' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('اكتب اسم الروبوت الجديد الخاص بك')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['THERI_LIST']: match[1]
            }
        });
        await message.sendMessage("تم تحديث قائمة THERI")
    }));




