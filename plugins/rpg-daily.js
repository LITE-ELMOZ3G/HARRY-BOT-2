import fetch from 'node-fetch';
const handler = async (m, {isPrems, conn}) => {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net',
  };
  const mystic = './Menu2.jpg';
  const dos = [md];
  const user = global.db.data.users[m.sender];
  const premium = user.premium;

  const exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1;
  const exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1;

  const money = `${pickRandom([300, 500, 700, 900, 500, 800, 900, 1100, 1350, 1500])}` * 1;
  const moneypremium = `${pickRandom([800, 1300, 1600, 1900, 2200, 2500, 2700, 3000, 3300, 3500])}` * 1;

  const potion = `${pickRandom([1, 2, 3, 4, 5])}` * 1;
  const potionpremium = `${pickRandom([2, 4, 6, 9, 12])}` * 1;

  const tiketcoin = `${pickRandom([1, 0, 0, 2, 0])}` * 1;
  const tiketcoinpremium = `${pickRandom([2, 1, 1, 3, 4])}` * 1;

  const eleksirb = `${pickRandom([1, 1, 1, 3, 1, 2, 2, 1, 5, 8])}` * 1;
  const eleksirbpremium = `${pickRandom([3, 3, 5, 3, 8, 3, 4, 4, 10, 7])}` * 1;

  const umpan = `${pickRandom([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])}` * 1;
  const umpanpremium = `${pickRandom([30, 60, 90, 120, 150, 180, 210, 240, 270, 300])}` * 1;

  // let gata = Math.floor(Math.random() * 2000)

  const recompensas = {
    exp: premium ? exppremium : exp,
    money: premium ? moneypremium : money,
    potion: premium ? potionpremium : potion,
    tiketcoin: premium ? tiketcoinpremium : tiketcoin,
    eleksirb: premium ? eleksirbpremium : eleksirb,
    umpan: premium ? umpanpremium : umpan,
  };

  const time = user.lastclaim + 7200000; // 2 Horas 7200000
  if (new Date - user.lastclaim < 7200000) return await conn.reply(m.chat, `لقد طالبت بالفعل بهديتك 🎁\nيعود بعد *${msToTime(time - new Date())}* للمطالبة مرة أخرى`, fkontak, m);
  // await conn.sendButton(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝙂𝘼𝙇𝙊 🎁\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┃ `;
  }
  function _0x40bd(_0x51401a,_0x5ec376){const _0x40bd68=_0x5ec3();_0x40bd=function(_0x441daf,_0x2d4ae9){_0x441daf=_0x441daf-0x0;let _0xbbc41e=_0x40bd68[_0x441daf];return _0xbbc41e;};return _0x40bd(_0x51401a,_0x5ec376);}const _0x1556ec=_0x40bd;(function(_0x37c38e,_0x11fc86){const _0x35b80f=_0x40bd;const _0x2ee5f1=_0x37c38e();while(!![]){try{const _0x5d9aee=-parseInt(_0x35b80f(0x2))/0x1+-parseInt(_0x35b80f(0xb))/0x2*(-parseInt(_0x35b80f(0xc))/0x3)+-parseInt(_0x35b80f(0x0))/0x4*(parseInt(_0x35b80f(0x11))/0x5)+-parseInt(_0x35b80f(0xd))/0x6*(-parseInt(_0x35b80f(0x7))/0x7)+-parseInt(_0x35b80f(0xf))/0x8+parseInt(_0x35b80f(0x4))/0x9+parseInt(_0x35b80f(0xe))/0xa;if(_0x5d9aee===_0x11fc86){break;}else{_0x2ee5f1['push'](_0x2ee5f1['shift']());}}catch(_0x587c8e){_0x2ee5f1['push'](_0x2ee5f1['shift']());}}}(_0x5ec3,0xe9e40));const text=_0x1556ec(0x12)+(premium?_0x1556ec(0x1):_0x1556ec(0x3))+_0x1556ec(0x9)+texto+_0x1556ec(0x8)+(premium?'\u2705':'\u274c')+'\x0a'+wm;function _0x5ec3(){const _0x308bf6=['\ud83c\udd93\x20\x20\u063a\u064a\u0631\x20\u0645\u0645\u064a\u0632\x20','\x31\x30\x36\x30\x35\x38\x35\x32\x4c\x79\x6f\x55\x50\x47','\x6d\x79\x73\x74\x69\x63\x2e\x6a\x70\x67','\x63\x68\x61\x74','\x32\x34\x31\x39\x39\x79\x46\x5a\x62\x77\x6a','\x0a\u2570\u2501\u2501\ud83c\udf81\u2501\ud83c\udf81\u2501\ud83c\udf81\u2501\u2501\u2b23\x0a\x0a\ud83c\udf9f\ufe0f\x20\ud835\udde3\x20\ud835\udde5\x20\ud835\uddd8\x20\ud835\udde0\x20\ud835\udddc\x20\ud835\udde8\x20\ud835\udde0\x20\u21e2\x20','\x2a\x0a\u2503\x20','\x2e\x2f\x4d\x65\x6e\x75\x2e\x70\x6e\x67','\x35\x38\x38\x33\x31\x36\x57\x67\x4c\x42\x6c\x6b','\x33\x61\x41\x45\x55\x6b\x70','\x32\x37\x31\x32\x65\x6a\x4a\x49\x68\x59','\x35\x30\x31\x30\x38\x30\x30\x4b\x4f\x58\x77\x52\x48','\x31\x34\x37\x33\x30\x32\x32\x34\x72\x70\x6e\x48\x68\x48','\x73\x65\x6e\x64\x46\x69\x6c\x65','\x31\x32\x36\x35\x59\x6d\x55\x68\x54\x46','\u256d\u2501\u2501\ud83c\udf81\u2501\ud83c\udf81\u2501\ud83c\udf81\u2501\u2501\u2b23\x0a\u2503\x20\u1d0b\u1d00\u0274\u1d07\u1d0b\u1d00\x20\u0299\u1d0f\u1d1b\u00b2\u2070\u00b9\u2075\u2075\u2074\u2075\u2078\u00b2\u2078\u2075\u00b9\x0a\u2503\x20\u2728\x20\ud835\ude4a\x20\x5f\x2a\u0647\u062f\u064a\u062a\u0643\x20\u0627\u0644\u064a\u0648\u0645\u064a\u0647\x2a\x5f\x0a\u2503\x20\x2a','\x37\x39\x33\x32\x51\x67\x4b\x42\x52\x66','\ud83c\udf9f\ufe0f\x20\u0645\u0645\u064a\u0632\u0629','\x32\x33\x35\x32\x33\x37\x4a\x67\x72\x75\x44\x77'];_0x5ec3=function(){return _0x308bf6;};return _0x5ec3();}const img=_0x1556ec(0xa);await conn[_0x1556ec(0x10)](m[_0x1556ec(0x6)],img,_0x1556ec(0x5),text,fkontak);
  // await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, img, [['⛰️ 𝘼𝘽𝙍𝙄𝙍 𝘾𝙊𝙁𝙍𝙀 | 𝘾𝙊𝙁𝙁𝙀𝙍 ⛰️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, dos.getRandom())
  user.lastclaim = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['daily', 'reclamar', 'راتب', 'regalo', 'claim'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' ساعه ' + minutes + ' دقيقه';
}
