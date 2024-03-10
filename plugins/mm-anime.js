import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/venomov5846834/Venommstt/master/src/JSON/anime-${command}.json`)).data;
  const haha = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m);
// conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)
};
handler.command = handler.help = ['ناروتو','ساسكي','ميناتو','مادرا','هيناتا','نيزوكو','ام-جبهة','انا','اكيرا','ساجاري','كوتوري','كاوري','كوجيرو'كاجا','اتورو','ايسوزو','انري','هستا','اميليا','الينا','ديدارا','التنكر','شتيوجو','تشيهو','ايزا','اسينا','اكياما'];
handler.tags = ['anime'];
export default handler;

