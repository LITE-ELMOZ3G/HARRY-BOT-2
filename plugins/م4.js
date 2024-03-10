let handler = async (m, { conn, command, text }) => {
let love = `

⦓           ⦓🏆⦔          ⦔ـ
⌟🌐⌜ قـسـم الـبـحـث
⦓           ⦓🏆⦔          ⦔ـ
🧸❯ ⏐ .جـوجـل
☫ ⌟يبحث في جوجل مع صوره⌜
🧸❯ ⏐ .لـيـنـكـات
☫ ⌟يبحثلك بي استخدام الرابط⌜
🧸❯ ⏐ .بـحـث
☫ ⌟يبحث في اليوتيوب⌜
🧸❯ ⏐ .جـيـتـهاب
☫ ⌟يبحث في جيت هاب⌜
🧸❯ ⏐ .اغـانـي 
☫ ⌟بحث عن كلام الاغاني⌜
🧸❯ ⏐.انـمـي
☫ ⌟بحث عن الانمي بالانجليزي⌜
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م4|م٤|اوامر البحث| اوامر بحث|الاوامر البحث|الاوامر بحث)$/i
export default handler
