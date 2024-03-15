import fetch from  'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `لوفي اخيرا اصبح يدعم ميزة الذكاء الاصطناعي: يمكنك الان البحث عن البحوث والعروض والترجمة والاجابة عن التمارين والأسئلة كيف ما كان نوعها و بكل اللغات \n \n`
try {
let IA2 = await fetch(`app-ZQE5HgZQhWXKTU89H2uAFsIH`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`app-ZQE5HgZQhWXKTU89H2uAFsIH`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
try {    
let tioress = await fetch(`app-ZQE5HgZQhWXKTU89H2uAFsIH`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {        
throw `*[❗] خطأ*`
}}}}
handler.command = [ 'ذكاء-اصطناعي' ,  'chatgpt' ,'شات جي بي تي' , 'تحدث ' ,'ai',  'تكلم' ]
export default handler
