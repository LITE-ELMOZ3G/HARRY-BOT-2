import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[🌉] حط اسم الصوره اللي بتبحث عنها في بينترست*\n*مثل*\n*${usedPrefix + command} سوكونا*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
_*تم التنزيل*_
${text}
`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(بين|بينترست)$/i;
export default handler;
