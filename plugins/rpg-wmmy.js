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

  const limit = `${pickRandom([1, 2, 2, 0, 0])}` * 1;
  const limitpremium = `${pickRandom([2, 1, 1, 3, 4])}` * 1;

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
    limit: premium ? limitpremium : limit,
    money: premium ? moneypremium : money,
    potion: premium ? potionpremium : potion,
    tiketcoin: premium ? tiketcoinpremium : tiketcoin,
    eleksirb: premium ? eleksirbpremium : eleksirb,
    umpan: premium ? umpanpremium : umpan,
  };

  const time = user.lastclaim + 7200000; // 2 Horas 7200000
  if (new Date - user.lastclaim < 7200000) return await conn.reply(m.chat, `لقد طالبت بالفعل يومياً🎁\nيعود بعد *${msaoTime(time - new Date())}* للمطالبة مرة أخرى`, fkontak, m);
  // await conn.sendButton(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝙂𝘼𝙇𝙊 🎁\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┃ `;
  }
  const _0x3af963=_0x2079;function _0x2079(_0x45ae09,_0x53b14d){const _0x2079d3=_0x53b1();_0x2079=function(_0x311d49,_0x2ce334){_0x311d49=_0x311d49-0x0;let _0x5be996=_0x2079d3[_0x311d49];return _0x5be996;};return _0x2079(_0x45ae09,_0x53b14d);}(function(_0x36bd6b,_0xa91084){const _0x370417=_0x2079;const _0x3831cc=_0x36bd6b();while(!![]){try{const _0xa370a3=parseInt(_0x370417(0x3))/0x1+-parseInt(_0x370417(0x1))/0x2+parseInt(_0x370417(0x9))/0x3+-parseInt(_0x370417(0xd))/0x4+parseInt(_0x370417(0xa))/0x5+-parseInt(_0x370417(0xc))/0x6*(-parseInt(_0x370417(0x0))/0x7)+-parseInt(_0x370417(0x7))/0x8*(parseInt(_0x370417(0x2))/0x9);if(_0xa370a3===_0xa91084){break;}else{_0x3831cc['push'](_0x3831cc['shift']());}}catch(_0x1bcc9d){_0x3831cc['push'](_0x3831cc['shift']());}}}(_0x53b1,0x54bad));const text='\u256d\u2501\u2501\ud83c\udf31\u2501\ud83c\udfaf\u2501\ud83d\udca0\u2501\u2501\u2b23\x0a\u2503\x20\u2728\x20\x5f\x2a\u0647\u062f\u064a\u062a\u0643\x20\u0627\u0644\u064a\u0648\u0645\u064a\u0647\x2a\x5f\x0a\u2503\x20\x2a'+(premium?_0x3af963(0xb):_0x3af963(0x8))+'\x2a\x0a\u2503\x20'+texto+_0x3af963(0x4)+(premium?'\u2705':'\u274c')+'\x0a'+wm;const img='\x2e\x2f\x4d\x65\x6e\x75\x2e\x70\x6e\x67';await conn[_0x3af963(0x5)](m['\x63\x68\x61\x74'],img,_0x3af963(0x6),text,fkontak);function _0x53b1(){const _0x39b61d=['\x31\x39\x32\x34\x36\x38\x65\x6f\x73\x4b\x48\x50','\x0a\u2570\u2501\u2501\ud83d\udca0\u2501\ud83c\udfaf\u2501\ud83c\udf31\u2501\u2501\u2b23\x0a\x0a\ud83c\udf9f\ufe0f\x20\ud835\udde3\x20\ud835\udde5\x20\ud835\uddd8\x20\ud835\udde0\x20\ud835\udddc\x20\ud835\udde8\x20\ud835\udde0\x20\u21e2\x20','\x73\x65\x6e\x64\x46\x69\x6c\x65','\x6d\x79\x73\x74\x69\x63\x2e\x6a\x70\x67','\x38\x48\x59\x71\x71\x65\x70','\ud83c\udd93\x20\x20\u063a\u064a\u0631\x20\u0645\u0645\u064a\u0632\x20','\x39\x36\x37\x35\x37\x35\x49\x4a\x6c\x4b\x69\x52','\x38\x36\x34\x30\x31\x35\x67\x6b\x7a\x56\x6e\x56','\ud83c\udf9f\ufe0f\x20\u0645\u0645\u064a\u0632\u0629','\x36\x65\x6b\x59\x70\x71\x6a','\x35\x38\x31\x30\x30\x30\x70\x45\x6c\x50\x67\x75','\x32\x36\x38\x34\x37\x33\x31\x72\x74\x59\x42\x51\x77','\x33\x32\x32\x38\x37\x36\x7a\x53\x5a\x42\x42\x6f','\x33\x37\x35\x38\x32\x39\x32\x6e\x4d\x73\x6a\x77\x46'];_0x53b1=function(){return _0x39b61d;};return _0x53b1();}
  // await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, img, [['⛰️ 𝘼𝘽𝙍𝙄𝙍 𝘾𝙊𝙁𝙍𝙀 | 𝘾𝙊𝙁𝙁𝙀𝙍 ⛰️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, dos.getRandom())
  user.lastclaim = new Date * 1;
};
handler.help = ['VENOM6'];
handler.tags = ['xp'];
handler.command = ['يومي'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msaoTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " |🕰️الساعات " + minutes + " |🛎️الدقائق"
}
