const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[❗تحذير❗] تم حظر المستخدم بنجاح*\n\n*—◉ لن يستطيع استخدام البوت حتي يتم إزالة الحظر*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^حظر$/i;
handler.rowner = true;
export default handler;
