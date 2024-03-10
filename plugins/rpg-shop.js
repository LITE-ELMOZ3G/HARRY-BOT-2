const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^شراء/i, '');
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌─「 *ملاحظة الدفع* 」
‣ *الشراء الاسمي* : + ${count} 🪙 
‣ *أنفق* : -${xpperlimit * count} ⚡
└──────────────`, m);
  } else conn.reply(m.chat, `❎ عذرًا، ليس لديك ما يكفي من *طاقه ⚡* للشراء *${count}* عملات🪙`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['شراء', 'شراءالكل'];

handler.disabled = false;

export default handler;
