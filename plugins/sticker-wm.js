import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '*[❗مساعده❗] منشن الاستسكر الي عايز تحط حقوقو وحط حقوقك جنب الامر*';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*[❗] حط اسم*';
    const img = await m.quoted.download();
    if (!img) throw '*[❗] حط حقوق*';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙰𝙻𝙶𝙾 𝙵𝙰𝙻𝙻𝙾.. 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙷𝙰𝚈𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙾 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈 𝙷𝙰𝚈𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝚄 *';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^حقوق|سرقه|wm$/i;
handler.limit = 3;
export default handler;
