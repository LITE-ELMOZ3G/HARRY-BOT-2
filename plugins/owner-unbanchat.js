const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] تم الغاء الحظر بنجاح*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^فك-الحظر|الغاء-الحظر/i;
handler.rowner = true;
export default handler;
