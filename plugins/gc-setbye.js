const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('*[❗] تم تكوين رسالة وداع بشكل صحيح لهذه المجموعة*');
  } else throw `*[❗] قم بوضع رساله، استخدم:*\n*- @user (لمنشن العضو)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['تغير-الوداع', 'تغيرالوداع'];
handler.admin = true;
export default handler;
