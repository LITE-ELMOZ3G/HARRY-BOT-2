import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
╭━━━[ *المستوى* ]━━━━⬣
┃ *المستخدم*
 ${name}* ┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *مستواك:* *${user.level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*الدور:* *${user.role}* ┃

*XP:* *${user.exp - min}/${xp}* ┃
╰━━━〔 *🛡️ 1.4.9* 〕━━━━━⬣

*أنت تحتاج الى *${max - user.exp}* XP لرفع المستوى*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 عاش يحب ${conn.getName(m.sender)}    المستوي:`
        let str = `
*╭━⊰ ${name} ⊱━დ*
*┃ المستوى السابق:* *${before}*
*┃ المستوى الحالي:* *${user.level}*
*┃ نطاق:* *${user.role}*
*┃ تاريخ: 30/8/2023, 11.41.51*
*╰━⊰ 🎖️ مستوى جديد 🎖️ ⊱━━დ*


*_كلما تفاعلت مع البوت ارتفع مستواك_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['لفل', 'lvl', 'levelup', 'مستواي', 'مستوا'] 

export default handler
  