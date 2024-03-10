//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ منشن المتخدم'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ أدخل المبلغ * الحد * الذي تريد إضافته'
    if (isNaN(txt)) throw '🔢 مجرد ارقام'
    let dmt = parseInt(txt)
    let limit = dmt

    if (diamond < 1) throw '✳️ الحد الأدنى  *1*'
    let users = global.db.data.users
   users[who].limit += dmt

    await m.reply(`≡ *🪙 إضافة عملات*
┌──────────────ـ
▢🪙 *المبلغ:* ${dmt}
└──────────────ـ`)
   conn.fakeReply(m.chat, `▢ 
يحصل \n\n *+${dmt}* الحد`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi', 'اضف-عملات','ضيف-عملات] 
handler.rowner = true

export default handler

