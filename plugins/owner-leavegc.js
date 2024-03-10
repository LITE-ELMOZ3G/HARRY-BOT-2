const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*انا اسف ان كنت سبب لكم الازعاج احبكم وداعا! (≧ω≦)ゞ*');
  await conn.groupLeave(id);
};
handler.command = /^(برا|اخرج|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
