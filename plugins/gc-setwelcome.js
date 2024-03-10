const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('*[❗] تم تغير الترحيب بنجاح*');
  } else throw `*[❗]حط الترحيب، مثلا استعمل:*\n*- @user (لمنشنه العضو)*\n*- @subject (اسم الجروب)*\n*- @desc (وصف المجموعه)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['تغير-الترحيب', 'تغيرالترحيب'];
handler.admin = true;
export default handler;
