import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*اعمل منشن*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*ضيف الكميه*';
  if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙸𝙼𝙱𝙾𝙻𝙾 𝙽𝙾 𝙰𝙳𝙼𝙸𝚃𝙸𝙳𝙾, 𝚂𝙾𝙻𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂!*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰 (𝚇𝙿) 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝚂 𝟷*';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *اضافة طاقه*
┌──────────────
▢  *العدد:* ${xp}
└──────────────`);
};
handler.command = ['addxp', 'اضف-طاقه','ضيف-طاقه'];
handler.rowner = true;
export default handler;
