let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬〘🔥〙⌬━─━✥*

⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪▭̷໋̟  ۫ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ۫  ▭̷໋̟۪۬໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪
   ‏

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت تربو 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه عبد الرحمن 〙⌬*
*⌬〘 هذا البوت لا يعمل بالخاص 〙⌬*
*⌬〘 ويعمل بالمجموعات 〙⌬*
*⌬〘 اذا كنت تريد ابلاغ عن مشكلة 〙⌬*
*⌬〘 اكتب الامر (.ابلاغ) 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 مجموعه الدعم 〙⌬*

*⏣⊰ https://chat.whatsapp.com/CoAUgy0624LCKP81rNiMcB ⊱⏣*

*⌬〘 رقم مطوري 〙⌬*

*⏣⊰ https://wa.me/+201151094460 ⊱⏣*

*✥━─━⌬〘🔥〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler
