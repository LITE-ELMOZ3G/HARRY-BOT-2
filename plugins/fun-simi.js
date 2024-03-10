function _0x3e83() {
  const _0x25f245 = ['includes', 'اهلا', 'fun', '2109464lILQCm', 'map', '5wpcdHJ', 'bot', '970446cOLFae', '*[❗] تستعمل الأمر بطريق خطأ علي ان تقدم نص*\x0a\x0a*مثل: ', 'tags', '53880DCmWzL', 'command', '229624lzMrgF', 'json', 'cnt', 'HELLO', '125938EFyUZQ', 'replace', 'pushName', 'Hello', 'simi', '4wmwksL', '777448kwOSxj', '&lc=ar', '7900350eWycpG', 'هاي', '18MdRwaN', 'reply', '&msg=', '*[❗] ايرور قول ل رايد تو ميليودس*'];
  _0x3e83 = function () {
      return _0x25f245;
  };
  return _0x3e83();
}(function (_0x22904d, _0x3893ec) {
  const _0x2b65c7 = _0x57f4;
  const _0x350094 = _0x22904d();
  while (!![]) {
      try {
          const _0x319b9f = -parseInt(_0x2b65c7(0xa)) / 0x1 * (-parseInt(_0x2b65c7(0x5)) / 0x2) + -parseInt(_0x2b65c7(0x1d)) / 0x3 + parseInt(_0x2b65c7(0xb)) / 0x4 + parseInt(_0x2b65c7(0x18)) / 0x5 * (parseInt(_0x2b65c7(0x1a)) / 0x6) + parseInt(_0x2b65c7(0x16)) / 0x7 + parseInt(_0x2b65c7(0x1)) / 0x8 * (parseInt(_0x2b65c7(0xf)) / 0x9) + -parseInt(_0x2b65c7(0xd)) / 0xa;
          if (_0x319b9f === _0x3893ec) {
              break;
          } else {
              _0x350094['push'](_0x350094['shift']());
          }
      } catch (_0x41c52a) {
          _0x350094['push'](_0x350094['shift']());
      }
  }
}(_0x3e83, 0x26c16));
import _0x8864ea from '@vitalets/google-translate-api';
import _0x5896ab from 'node-fetch';
const handler = async (_0x245bdd, {
  text: _0x522d9e,
  command: _0x142113,
  args: _0x5dc150,
  usedPrefix: _0xdef723
}) => {
  const _0x225c8b = _0x57f4;
  if (!_0x522d9e) throw _0x225c8b(0x1b) + (_0xdef723 + _0x142113) + ' عامل ايه*\x0a\x0a*ملاحظة*\x0aشات سمسمي اوقات ممكن يسب وانت بتكلموا ياريت متجريش الشتيمه وافتكر ربنا شايفك';
  try {
      const _0xefe6e7 = await _0x5896ab('https://api.simsimi.net/v2/?text=' + _0x522d9e + _0x225c8b(0xc));
      const _0x422de9 = await _0xefe6e7['json']();
      _0x245bdd['reply'](_0x422de9['success']);
  } catch {
      try {
          if (_0x522d9e['includes'](_0x225c8b(0xe))) _0x522d9e = _0x522d9e['replace'](_0x225c8b(0x14), _0x225c8b(0x8));
          if (_0x522d9e[_0x225c8b(0x13)](_0x225c8b(0x14))) _0x522d9e = _0x522d9e[_0x225c8b(0x6)]('هاي', _0x225c8b(0x8));
          if (_0x522d9e['includes'](_0x225c8b(0x14))) _0x522d9e = _0x522d9e['replace'](_0x225c8b(0xe), _0x225c8b(0x4));
          const _0x3e33bf = await _0x5896ab('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + _0x522d9e);
          const _0x5b684b = await _0x3e33bf[_0x225c8b(0x2)]();
          const _0x52a27d = _0x245bdd[_0x225c8b(0x7)] || '1';
          const _0x5232ad = await _0x5896ab('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + _0x52a27d + _0x225c8b(0x11) + _0x5b684b[0x0][0x0][0x0]);
          const _0x955e58 = await _0x5232ad['json']();
          const _0x3c7ea7 = await _0x5896ab('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + _0x955e58[_0x225c8b(0x3)]);
          const _0x54048d = await _0x3c7ea7[_0x225c8b(0x2)]();
          _0x245bdd[_0x225c8b(0x10)](_0x54048d[0x0][0x0][0x0]);
      } catch {
          throw _0x225c8b(0x12);
      }
  }
};
handler['help'] = [_0x4c81d3(0x9), _0x4c81d3(0x19)][_0x4c81d3(0x17)](_0x49d0af => _0x49d0af + ' <teks>');
handler[_0x4c81d3(0x1c)] = [_0x4c81d3(0x15)];

function _0x57f4(_0x8f5a3e, _0x3e8322) {
  const _0x57f4a6 = _0x3e83();
  _0x57f4 = function (_0x2a4628, _0x4f226d) {
      _0x2a4628 = _0x2a4628 - 0x0;
      let _0x782721 = _0x57f4a6[_0x2a4628];
      return _0x782721;
  };
  return _0x57f4(_0x8f5a3e, _0x3e8322);
}
handler[_0x4c81d3(0x0)] = /^((sim)?simi|bot|سمسم|سمسمس)$/i;
export default handler;