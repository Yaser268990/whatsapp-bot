const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'clist', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
🎗️ .xmedia
💖 اكتب هاذا الامر لارسال اوامر التنزيل._ 

🎗️ .audio command
💖 يرسل البوت جميع اوامر ال bmg 

🎗️ .ownercmnd
💖 اوامر المشرفين على البوت فقط

🎗️ .codtts
💖 تغير لغة المقطع الصوتي .tts & ايضا ل .trt الترجمة_ 

🎗️ .adan 
💖 يجد لك وقت الصلاة._ 
💬 مثال:- : .prayer <المدينة>

🎗️ .rename 
💖 اعادة تسميه شيء[object Object]_ 

🎗️ .revoke

🎗️ .git
💖 يرسل رابط صانع البوت

🎗️ .print 
💖 يطبع داخل الملف على الخادم._ 

🎗️ .bashmedia 
💖 يرسل الصوت والفيديو والصور داخل السيرفر._ 
💬 مثال:- : video.mp4 && media/gif/pic.mp4

🎗️ .addserver
💖 تحميل الصورة أو الصوت أو الفيديو إلى السيرفر._ 

🎗️ .term1 
💖 يسمح بتشغيل الأمر على غلاف الخادم._ 

🎗️ .findvid
💖 يعرض المعلومات الفنية للفيديو الذي تم الرد عليه._ 

🎗️ .pm 
💖 لإرسال رسالة خاصة إلى الشخص الذي تم الرد عليه._ 

🎗️ .s 
💖لإرسال رسالة خاصة إلى الشخص المستثنى._ 

🎗️ .anime
💖 صورة انمي عشوائية _ 

🎗️ .apkmod

🎗️ .fatp

🎗️ .ttp 
💖 يحول النص إلى رسم عادي._ 

🎗️ .attp 
💖 يضيف تأثير قوس قزح إلى النص كملصق._ 

🎗️ .bob 
💖 قم بعمل نص على سبونج بوب بورد_

🎗️ .slot 
💖 لعبه خفيفه لك_ 

🎗️ .gura 
💖 انشاء نص عملاق_ 

🎗️ .harta 
💖 انشاء نصوص عشوائيه_ 

🎗️ .rip 
💖 يرجى تقديم رابط صورة للتأثير المراد تطبيقه (تطبيق تأثير الموت)_ 

🎗️ .qrcode 
💖 إنشاء نصوص عشوائية_ 

🎗️ .nulis 
💖 إنشاء نصوص عشوائية_ 

🎗️ .sand 
💖 إنشاء نصوص عشوائية_ 

💝 .bgm 
💖 قم بتشغيل وإيقاف تشغيل bgm. -امر مالك البوت_ 
💬 مثال:- : .bgm on / off

🎗️ .carbon
💖 يرسل صورة الكربون 

🎗️ .warn
💖 رسالة تحذير 

🎗️ .bgm 
💖 اعادة الرد BGM mode_ 
💬 مثال:- : .bgm one / two

🎗️ .git 
💖 رقم المالك_ 

🎗️ .mp3
💖 يحول الفيديو إلى صوت._ 

🎗️ .photo
💖 يحول الملصق إلى صورة._ 

🎗️ .mp4
💖 يحول الملصقات المتحركة إلى فيديو._ 

🎗️ .doc 
💖 تحويل إلى المستند وإضافة اسم المعطى_ 
💬 مثال:- :.doc pinky *استبدال الخنصر بالاسم المطلوب*

🎗️ .dict 
💖 استخدمه كقاموس.
مثال: .dict en_US;lead
 لدعم اللغات ترسل *.lngcode*

🎗️ .meme 
💖 صور الميمز التي قمت بالرد عليها.

🎗️ .welcome
💖 يحدد رسالة الترحيب. إذا تركته فارغًا ، فستظهر رسالة الترحيب الافتراضيه._ 

🎗️ .goodbye
💖 يضبط رسالة الوداع. إذا تركت فارغة ، فإنها تظهر رسالة الوداع._ 

🎗️ .antilink 
💖 ينشط اداة Antilink (منع الروابط)._ 
💬 مثال:- : .antilink on / off

🎗️ .mediafire 

🎗️ .moretxt
🍒 المزيد من أوامر النص_ 

🎗️ .ffire 
💖 أضف النص الخاص بك إلى شعار فري فاير عشوائي_ 

🎗️ .emo 
💖 يحول ايموجي الى صورة_ 

🎗️ .notes
💖 يظهر كل ما تبذلونه من الملاحظات الموجودة._ 

🎗️ .save 
💖 الرد على الرسالة واكتب .save أو مجرد استخدام .save <ملاحضتك>  _ 

🎗️ .deleteNotes
💖 يحذف * كل * ملاحظاتك المحفوظة.

🎗️ .owner
💖 يوضح تفاصيل مالك البوت

🎗️ .jid 
💖 اعطاء المستخدم JID.

🎗️ .random 
💖 صورة كلمة_ 

🎗️ .brdmore 
💖 اظافة readmore  قبل النص الخاص بك

🎗️ .rdmore 
💖 اظافة readmore  قبل النص الخاص بك

🎗️ .removebg 
💖 يزيل خلفية الصور (قد لايعمل)._ 

🎗️ .report 
💖 يرسل التقارير إلى مسؤولي المجموعة._ 

🎗️ .get 

🎗️ .scan 
💖 للتحقق مما إذا كان الرقم المدخل مسجلاً على WhatApp._ 

🎗️ .trt
💖 يقوم بترجمة اي نص بواسطة Google Translate. يجب عليك الرد على الرسالة._ 
💬 مثال:- : .trt en ar (من Einglish الى Arabic)

🎗️ .detectlang
💖 يخمن لغة الرسالة التي تم الرد عليها._ 

🎗️ .currency

🎗️ .tts 
💖 يحول النص إلى صوت._ 

🎗️ .song 
💖 يقوم بتحميل الأغنية التي كتبتها._


🎗️ .video 
💖 تحميل الفيديو من يوتيوب._ 

🎗️ .sing 
💖 تغني الأغنية التي كتبتها_ 

🎗️ .song 
💖 يقوم بتحميل الأغنية التي كتبتها لمستخدمي ios._ 

🎗️ .wiki 
💖 استعلام البحث في ويكيبيديا._ 

🎗️ .img 
💖 عمليات البحث عن الصور ذات الصلة على Google._ 

🎗️ .github 
💖 يجمع معلومات github من اسم المستخدم المحدد.
⌨️ مثال: .github Yaser28990_ 
 
🎗️ .lyric 
💖 يبحث عن كلمات الأغنية._ 

🎗️ .covid 
💖 يظهر جدول فيروس كرونا ويشمل اكثر من 15 دولة._ 

🎗️ .sweather 
💖 يمنحك التفسيرات الأسبوعية لرصدات طقس الفضاء التي يقدمها مركز أبحاث طقس الفضاء (SWRC) للحصول على صفحة._ 

🎗️ .compliment 
💖 يرسل مجاملة الأحكام_ 

🎗️ .hmod 
💖 يبحث عن تطبيقات مهكره (مستخدمين الاندرويد)_ 

🎗️ .insult 
💖 يرسل كلمات مهينة_ 

🎗️ .movie 
💖 يظهر معلومات الفيلم._ 

🎗️ .joke 
💖 It sends random jokes_ 

🎗️ .roll
💖 roll dise 

🎗️ .owner
💖 يوضح تفاصيل مالك البوت_ 

🎗️ .quote 
💖 انها تشترك في الاقتباسات الشهيرة_ 

🎗️ .ss 
💖 يأخذ لقطة شاشة من الصفحة في الرابط المحدد._ 

🎗️ .setvar
💖 ترسل مجموعة من الروبوتات 

🎗️ .encrpt 
💖 تشفير النص باستخدام base64._ 
💬 مثال:- : .b64en <النص>

🎗️ .show 
💖 احصل على معلومات متعلقة بالمسلسلات والبرامج التلفزيونية_ 

🎗️ .ig 
💖 يجلب معلومات المستخدم من instagram_ 

🎗️ .animesay 
💖 يكتب النص داخل اللافتة التي تحملها فتاة الأنمي_ 

🎗️ .changesay 
💖 يحول النص إلى ملصق تغيير رأيي._ 

🎗️ .trumpsay 
💖 يحول النص إلى تغريدة ترامب._ 

🎗️ .pdf 
💖 يحول الى PDF_ 

🎗️ .bgm 
💖 قم بتشغيل وإيقاف تشغيل bgm. - أمر مالك الروبوت_ 
💬 مثال:- : .bgm on / off

🎗️ .autosticker 
💖 قم بتشغيل وإيقاف تشغيل bgm. - أمر مالك الروبوت_ 
💬 مثال:- : .sticker on / off

🎗️ .sudo 
💖 يعطي جميع صلاحيات البوت_ 
💬 مثال:- : .sudo *your number*

🎗️ .caption 
💖 يغير كل التسميات التوضيحية_ 
💬 مثال:- : .caption *Made by Yaser*

🎗️ .number 
💖 تغيير رقم المستخدم_ 
💬 مثال:- : .number *Made by Yaser*

🎗️ .deployer 
💖 غير اسم المستخدم_ 
💬 مثال:- : .deployer *Made by Yaser*

🎗️ .handlers 
💖 معالجات التغييرات (بادئة الاوامر)_ 
💬 مثال:- : .handler ^[.!] 

🎗️ .botname 
💖 تغيير اسم الروبوت الخاص بك_ 
💬 مثال:- : .botname *الاسم* 

🎗️ .theri  
💖 تغيير أوامرك_ 
💬 مثال:- : .theri command,command

🎗️ .sticker
💖 يقوم بتحويل الصورة أو الفيديو الذي تم الرد عليه إلى ملصق._ 

🎗️ .ffpack
💖 صانع شعار فري فاير_ 

🎗️ .ffpack
💖صانع شعار فري فاير_ 

🎗️ .alive
💖 هل يعمل البوت?_ 

🎗️ .sysd
💖 يظهر خصائص النظام._ 

🎗️ .tagadmin
💖 منشن لكل مشرفين المجموعة._ 

🎗️ .txtit
💖 يعرض أدوات النص إلى الصور مع وصول غير محدود._ 

🎗️ .antibadword 
💖 تشغيل وإيقاف تشغيل مكافحة الكلمات السيئة لإزالة الأعضاء عند استخدامهم للكلمات السيئة_ 
💬 مثال:- : .antibadword on / off

🎗️ .a 
💖 يحول المقطع الصوتي الى تسجيل صوتي._ 

🎗️ .unvoice
💖 يحول المقطع الصوتي الى تسجيل صوتي._ 

🎗️ .update
💖 يتحقق من التحديثات._ 

🎗️ .update now
💖 يقوم بإجراء التحديثات._ 

🎗️ .wallpaper
💖 يرسل خلفيات عالية الدقة._ 

🎗️ .wame 
💖 احصل على رابط دردشة المستخدم._ 

🎗️ .rwarn
💖 رسالة تحذير 0_ 

🎗️ .weather 
💖 يظهر الطقس._ 

🎗️ .speedtest
💖 يقيس سرعة التنزيل والتحميل._ 

🎗️ .ping
💖 يقيس ping الخاص بك._ 

🎗️ .short 
💖 يختصر الروابط الطويله._ 

🎗️ .calc 
💖 ينفذ عمليات حسابية بسيطة._ 

🎗️ .sendi
💖 تحميل الحاله من الواتس اب_ 

🎗️ .sendv
💖 تنزيل الحاله من الواتس اب_ 

🎗️ .whois
💖 يعرض بيانات التعريف الخاصة بالمجموعة أو الشخص._ 
`}) 

}));
