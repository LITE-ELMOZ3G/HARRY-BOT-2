const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 معلومات الجروب」*\n
*رمـز الـجـروب:* 
${groupMetadata.id}

*الاسـم:* 
${groupMetadata.subject}

*الـوضـع:* 
${groupMetadata.desc?.toString() || 'عام'}

*عـدد الأعـضـاء:*
${participants.length} أعضاء

*مـنـشـأ الـجـروب:* 
@${owner.split('@')[0]}

*الادمـن:*
${listAdmin}

*الـتـفـعـلات:*
—◉ الترحيب: ${welcome ? '✅' : '❌'}
—◉ الكشف: ${detect ? '✅' : '❌'} 
—◉ الكشف 2: ${detect2 ? '✅' : '❌'} 
—◉ لينكات: ${antiLink ? '✅' : '❌'} 
—◉ لينكات 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ مود: ${modohorny ? '✅' : '❌'} 
—◉ استيكرات تلقائيا: ${autosticker ? '✅' : '❌'} 
—◉ الأغاني: ${audios ? '✅' : '❌'} 
—◉ مضاد المرات: ${antiviewonce ? '✅' : '❌'} 
—◉ مضادالخاص : ${antidelete ? '✅' : '❌'} 
—◉ مضادالشتاؤم: ${antiToxic ? '✅' : '❌'} 
—◉ التقرار: ${antiTraba ? '✅' : '❌'} 
—◉ الاباحي: ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(م-الجروب|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;