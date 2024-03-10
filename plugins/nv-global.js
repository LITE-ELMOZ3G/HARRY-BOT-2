import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m, {conn}) {
  const chat = global.db.data.chats[m.chat];

  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned) {
    function _0x5b27(){const _0x3e71d1=['\x32\x36\x33\x34\x6e\x51\x49\x41\x41\x55','\x32\x37\x38\x35\x38\x37\x32\x4b\x62\x41\x76\x74\x57','\x31\x36\x35\x39\x35\x32\x32\x57\x59\x70\x6d\x4a\x6c','\x2a\x3c\x20\u0645\u0633\u0627\u0639\u062f\u0647\x20\u0644\u062f\u0627\u062e\u0644\x20\u0627\u0644\u0628\u0648\u062a\x20\u0627\u0644\u064a\x20\u062c\u0631\u0648\u0628\u0643\x20\x20\x2f\x3e\x2a\x0a\x0a\x2a\u2014\u25c9\x20\u0627\u0647\u0644\u0627\x20\x40','\x33\x30\x32\x34\x37\x38\x34\x4d\x4b\x57\x43\x4b\x76','\x73\x65\x6e\x64\x65\x72','\x33\x35\x30\x79\x4f\x67\x68\x6a\x52','\x36\x38\x30\x33\x30\x39\x4e\x78\x4c\x42\x74\x65','\x33\x37\x36\x33\x32\x33\x67\x6f\x74\x71\x65\x6f','\x31\x34\x35\x30\x33\x38\x39\x53\x48\x79\x4a\x49\x6e'];_0x5b27=function(){return _0x3e71d1;};return _0x5b27();}const _0x58bf00=_0x839d;(function(_0x1601c6,_0x3f76f6){const _0x142e09=_0x839d;const _0x35c883=_0x1601c6();while(!![]){try{const _0x11942a=-parseInt(_0x142e09(0x1))/0x1+parseInt(_0x142e09(0x5))/0x2+parseInt(_0x142e09(0x2))/0x3+-parseInt(_0x142e09(0x4))/0x4+parseInt(_0x142e09(0x9))/0x5*(-parseInt(_0x142e09(0x3))/0x6)+-parseInt(_0x142e09(0x0))/0x7+parseInt(_0x142e09(0x7))/0x8;if(_0x11942a===_0x3f76f6){break;}else{_0x35c883['push'](_0x35c883['shift']());}}catch(_0x1981fb){_0x35c883['push'](_0x35c883['shift']());}}}(_0x5b27,0x77c76));function _0x839d(_0x1e1586,_0x5b2774){const _0x839d6d=_0x5b27();_0x839d=function(_0x24f1fa,_0x2995e1){_0x24f1fa=_0x24f1fa-0x0;let _0x51c8cf=_0x839d6d[_0x24f1fa];return _0x51c8cf;};return _0x839d(_0x1e1586,_0x5b2774);}const join=(_0x58bf00(0x6)+m[_0x58bf00(0x8)]['\x73\x70\x6c\x69\x74']('\x40')[0x0]+'\x2c\x20\u0644\u062a\u0633\u062a\u0637\u064a\u0639\x20\u0627\u062f\u062e\u0644\x20\u0627\u0644\u0628\u0648\u062a\x20\u0627\u0644\u064a\x20\u062c\u0631\u0648\u0628\u0643\x20\u0627\u0633\u062a\u0639\u0645\u0644\x20\x20\x23\u0627\u0646\u0636\u0645\x2a\x0a\u0639\u0644\u064a\x20\u0633\u0628\u064a\u0644\x20\u0627\u0644\u0645\u062b\u0627\u0644\x0a\x0a\x2a\u2014\u25c9\x20\x23\u0627\u0646\u0636\u0645\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x68\x61\x74\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x63\x6f\x6d\x2f\x42\x6a\x72\x71\x69\x58\x4c\x5a\x4b\x6d\x5a\x33\x6a\x57\x37\x76\x45\x44\x79\x56\x32\x37\x20')['\x74\x72\x69\x6d']();
    this.sendMessage(m.chat, {text: join.trim(), mentions: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": global.imagen6, "mediaUrl": `https://chat.whatsapp.com/LjJbmdO0qSDEKgB60qivZj`, "sourceUrl": `https://chat.whatsapp.com/LjJbmdO0qSDEKgB60qivZj`}}}, {quoted: m});
  }

  if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Hola.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3'mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

    }

  if (!chat.isBanned && chat.audios && m.text.match(/(baÃ±ate|BaÃ±ate)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Banate.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(baneado|Baneado)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/baneado.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(bebito fiu fiu|bff|Bebito Fiu Fiu|Bff)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/bff.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(buenas noches|Buenas noches|Boanoite|boanoite)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/boanoite.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(buenas tardes|Buenas tardes|boatarde|Boatarde)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/boatarde.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(buenos dias|Buenos dias|buenos dÃ­as|Buenos dÃ­as)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Buenos-dias-2.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(chica lgante|Chica lgante|Chicalgante|chicalgante|chical gante|Chical gante)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/chica lgante.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

      if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/admin.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(fiesta del administrador)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/fiesta.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(fiesta del admin 3|atenciÃ³n grupo|atencion grupo|aviso importante|fiestadeladmin3)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Fiesta1.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/gemi2.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(audio hentai|Audio hentai|audiohentai|Audiohentai)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/hentai.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(sexo|Sexo|Hora de sexo|hora de sexo)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/maau1.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(laoracion|La biblia|La oraciÃ³n|La biblia|La oraciÃ³n|la biblia|La Biblia)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/ora.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(Marica tu|cancion1|Marica quien)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/cancion.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(MuriÃ³ el grupo|Murio el grupo|murio el grupo|muriÃ³ el grupo|Grupo muerto|grupo muerto)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Murio.m4a';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/navidad.m4a';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(noche de paz|Noche de paz|Noche de amor|noche de amor|Noche de Paz)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Noche.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(Nyapasu|Nyanpasu|nyapasu|Nyapasu|Gambure|Yabure)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/otaku.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/vengo.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(oni-chan|onichan|o-onichan)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Onichan.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|PÃ¡same tus fotos desnudas|pÃ¡same tu pack|me pasas tu pak|me pasas tu pack|pasa pack)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Elmo.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(QuiÃ©n es tu senpai botsito 7u7|Quien es tu senpai botsito 7u7|QuiÃ©n es tu sempai botsito 7u7|Quien es tu sempai botsito 7u7|QuiÃ©n es tu senpai botsito 7w7|Quien es tu senpai botsito 7w7|quiÃ©n es tu senpai botsito 7u7|quien es tu senpai botsito 7u7|QuiÃ©n es tu sempai botsito 7w7|Quien es tu sempai botsito 7w7|QuiÃ©n es tu senpai botsito|Quien es tu senpai botsito|QuiÃ©n es tu sempai botsito|Quien es tu sempai botsito|QuiÃ©n es tu senpai botsito|Quien es tu senpai botsito|quiÃ©n es tu senpai botsito|quien es tu senpai botsito|QuiÃ©n es tu sempai botsito|Quien es tu sempai botsito)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Tu.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(rawr|Rawr|RAWR|raawwr|rraawr|rawwr)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/rawr.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/siu.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(te amo|teamo)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Te-amo.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(ooo tio|tio que rico)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/oh_tio.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/pato.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/UwU.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/vete a la verga.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/viernes.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(vivan!!|vivan los novios|vivanlosnovios)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/vivan.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Yamete-kudasai.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(epico|esto va a ser epico)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Epico.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(shitpost)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/shitpost.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && chat.audios && m.text.match(/(no digas eso papu)/gi)) {
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/nopapu.mp3';
    this.sendPresenceUpdate('recording', m.chat);
    this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  

  return !0;
};
export default handler;
