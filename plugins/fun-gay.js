let handler = async (m, { conn }) => {
let vn = './gay2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/3bd9bc1ab15adf4f041b5.jpg'),
}), 'error.png', '*🏳️‍🌈 اكبر شاذ هو انت 🏳️‍🌈*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['شاذ']
handler.tags = ['maker']
handler.command = /^(شاذ)$/i
export default handler
