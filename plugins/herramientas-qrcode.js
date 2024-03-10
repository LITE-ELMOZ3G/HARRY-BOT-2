import {toDataURL} from 'qrcode';
const handler = async (m, {text, conn}) => {
  if (!text) throw `*[🧿] اكتب نص ليتم تحويله الي QR كود*`;
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), {scale: 8}), 'qrcode.png', '_*تـم تـصـنـيع الـكـود*_', m);
};
handler.help = ['', 'code'].map((v) => 'qr' + v + ' <teks>');
handler.tags = ['tools'];
handler.command = /^qr(code)|باركود?$/i;
export default handler;
