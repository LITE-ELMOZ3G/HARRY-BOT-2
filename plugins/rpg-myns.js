import {createHash} from 'crypto';
const handler = async function(m, {conn, text, usedPrefix}) {
  const sn = createHash('md5').update(m.sender).digest('hex');
  m.reply(`┏┅ ━━━━━━━━━━━━ ┅ ━
┃ *رقم سري:* 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`.trim());
};
handler.help = ['myns'];
handler.tags = ['xp'];
handler.command = /^(ايدي|ceksn)$/i;
handler.register = true;
export default handler;
