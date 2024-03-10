import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  function _0x45b7(_0x44dfc9, _0x3f25ce) {
    var _0x382b97 = _0x50d5();
    _0x45b7 = function (_0x3e4a69, _0x247799) {
        _0x3e4a69 = _0x3e4a69 - 0x0;
        var _0x50d59d = _0x382b97[_0x3e4a69];
        return _0x50d59d;
    };
    return _0x45b7(_0x44dfc9, _0x3f25ce);
}
(function (_0x4458d4, _0x11b4cb) {
    var _0x2a2b58 = _0x4458d4();
    while (!![]) {
        try {
            var _0x2a0a93 = -parseInt(_0x45b7(0x9)) / 0x1 * (parseInt(_0x45b7(0x3)) / 0x2) + -parseInt(_0x45b7(0x6)) / 0x3 + parseInt(_0x45b7(0xc)) / 0x4 + -parseInt(_0x45b7(0xa)) / 0x5 * (-parseInt(_0x45b7(0xd)) / 0x6) + -parseInt(_0x45b7(0x8)) / 0x7 * (parseInt(_0x45b7(0x1)) / 0x8) + -parseInt(_0x45b7(0x5)) / 0x9 + -parseInt(_0x45b7(0x0)) / 0xa * (-parseInt(_0x45b7(0xb)) / 0xb);
            if (_0x2a0a93 === _0x11b4cb) {
                break;
            } else {
                _0x2a2b58['push'](_0x2a2b58['shift']());
            }
        } catch (_0x4e80d9) {
            _0x2a2b58['push'](_0x2a2b58['shift']());
        }
    }
}(_0x50d5, 0xef768));
function _0x50d5() {
    var _0x4720ef = [
        '\x31\x32\x30\x34\x32\x36\x39\x33\x67\x52\x67\x52\x4d\x4a',
        '\x33\x37\x35\x31\x31\x35\x32\x43\x49\x67\x68\x61\x71',
        '\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f',
        '\x33\x39\x32\x33\x31\x32\x39\x4a\x62\x6b\x71\x48\x6a',
        '\x31\x33\x39\x37\x69\x72\x74\x66\x54\x58',
        '\x35\x45\x5a\x54\x53\x6e\x63',
        '\x33\x36\x35\x32\x36\x35\x30\x31\x75\x48\x47\x69\x44\x79',
        '\x33\x31\x38\x39\x36\x36\x38\x53\x51\x58\x6e\x71\x67',
        '\x38\x36\x33\x36\x38\x34\x34\x63\x65\x58\x43\x6d\x6e',
        '\x31\x30\x6c\x56\x69\x78\x56\x76',
        '\x38\x49\x67\x52\x56\x57\x4d',
        '\x74\x72\x61\x63\x65',
        '\x32\x30\x34\x34\x58\x62\x72\x72\x62\x5a',
        '\x62\x69\x6e\x64'
    ];
    _0x50d5 = function () {
        return _0x4720ef;
    };
    return _0x50d5();
}
var _0x3e4a69 = (function () {
    var _0x31bef2 = !![];
    return function (_0x1e093e, _0x33d4a9) {
        var _0x3f9953 = _0x31bef2 ? function () {
            if (_0x33d4a9) {
                var _0x194a47 = _0x33d4a9['\x61\x70\x70\x6c\x79'](_0x1e093e, arguments);
                _0x33d4a9 = null;
                return _0x194a47;
            }
        } : function () {
        };
        _0x31bef2 = ![];
        return _0x3f9953;
    };
}());
var _0x382b97 = _0x3e4a69(this, function () {
    var _0x4d0c0e;
    try {
        var _0x3fc50e = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29' + '\x29\x3b');
        _0x4d0c0e = _0x3fc50e();
    } catch (_0xde0d18) {
        _0x4d0c0e = window;
    }
    var _0x387a3e = _0x4d0c0e['\x63\x6f\x6e\x73\x6f\x6c\x65'] = _0x4d0c0e['\x63\x6f\x6e\x73\x6f\x6c\x65'] || {};
    var _0x577e06 = [
        '\x6c\x6f\x67',
        '\x77\x61\x72\x6e',
        '\x69\x6e\x66\x6f',
        '\x65\x72\x72\x6f\x72',
        '\x65\x78\x63\x65\x70\x74\x69\x6f\x6e',
        '\x74\x61\x62\x6c\x65',
        _0x45b7(0x2)
    ];
    for (var _0x4fc172 = 0x0; _0x4fc172 < _0x577e06['\x6c\x65\x6e\x67\x74\x68']; _0x4fc172++) {
        var _0x3bd995 = _0x3e4a69['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x45b7(0x4)](_0x3e4a69);
        var _0xf2f3a2 = _0x577e06[_0x4fc172];
        var _0x25fa21 = _0x387a3e[_0xf2f3a2] || _0x3bd995;
        _0x3bd995[_0x45b7(0x7)] = _0x3e4a69['\x62\x69\x6e\x64'](_0x3e4a69);
        _0x3bd995['\x74\x6f\x53\x74\x72\x69\x6e\x67'] = _0x25fa21['\x74\x6f\x53\x74\x72\x69\x6e\x67']['\x62\x69\x6e\x64'](_0x25fa21);
        _0x387a3e[_0xf2f3a2] = _0x3bd995;
    }
});
_0x382b97();
if (!text)
    throw '\x2a\x3c\x3c\ud83d\udc9f\u0645\u0640\u0633\u0627\u0639\u0640\u062f\u0647\ud83d\udc9f\x3e\x3e\x2a\x0a\u062d\u0637\x20\u0627\u0633\u0645\x20\u0627\u0644\u0627\u063a\u0646\u064a\u0647\x20\u0627\u0648\x20\u0627\u0644\u0641\u064a\u062f\u064a\u0648\x20\u0627\u0644\u0644\u064a\x20\u0628\u062a\u0628\u062d\u062b\x20\u0639\u0646\u0647\x20\x2a\u0628\u0637\u0631\u064a\u0642\u0647\x20\u0635\u062d\u064a\u062d\u0647\x2a\x0a\x0a\x2a\u2014\u25c9\x20\u0645\u062b\u0644\x3a\x2a\x0a\x2a' + (usedPrefix + command) + '\x20\x45\x6d\x69\x6e\x65\x6d\x20\x76\x65\x6e\x6f\x6d\x2a\x0a' + global['\x76\x65\x65\x65\x65\x65'] + '\x20';
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'شغل2' || command == 'playdoc') {
      additionalText = 'audio 🔊';
    } else if (command === 'فيديو3' || command == 'playdoc2') {
      additionalText = 'video 🎥';
    }
    const texto1 = `*◉——⌈🔊 قسم اليوتيوب__🔊⌋——◉*\n${global.anabro}
❏ 📌 *الاسم:* ${yt_play[0].title}
❏ 📆 *التاريخ:* ${yt_play[0].ago}
❏ ⌚ *الدقايق:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *المشاهدات:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *الصانع:* ${yt_play[0].author.name}
❏ ⏯️ *تشغيل:* ${yt_play[0].author.url}
❏ 🆔 *الرمز:* ${yt_play[0].videoId}
❏ 🪬 *الصيغه:* ${yt_play[0].type}
❏ 🔗 *الينك:* ${yt_play[0].url}\n
❏ *_جـاري التـحمـيل من  ${additionalText}, قـسم اليوتيوب．．．_*`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'شغل2' || command == 'playdoc') {
      try {
        const q = '128kbps';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.audio[q].download();
        const ttl = await yt.title;
        const size = await yt.audio[q].fileSizeH;
        await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
      } catch {
        try {
          const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
          const lolh = await lolhuman.json();
          const n = lolh.result.title || 'error';
          await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        } catch {
          try {
            const searchh = await yts(yt_play[0].url);
            const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
            const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
            const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
            conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*[❗] حصل خطأ*', m);
          }
        }
      }
    }
    if (command == 'فيديو3' || command == 'playdoc2') {
      try {
        const qu = '360';
        const q = qu + 'p';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const ttl = await yt.title;
        const size = await yt.video[q].fileSizeH;
        await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${ttl}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
      } catch {
        try {
          const mediaa = await ytMp4(yt_play[0].url);
          await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
        } catch {
          try {
            const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
            const lolh = await lolhuman.json();
            const n = lolh.result.title || 'error';
            const n2 = lolh.result.link;
            const n3 = lolh.result.size;
            const n4 = lolh.result.thumbnail;
            await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${n}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${n3}`, thumbnail: await fetch(n4)}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾*', m);
          }
        }
      }
    }
  } catch {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';
  }
};
handler.help = ['شغل2', 'فيديو3'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(playdoc|playdoc2|شغل2|فيديو3)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'ar', gl: 'AR', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}


