

async function everyones(message){
    const chat = await message.getChat();
    let palabras = message.body.split(' ');
    palabras.shift();
    let restoDelTexto = palabras.join(' ');
    let mentions = [];
    for (let participant of chat.participants) {mentions.push(`${participant.id.user}@c.us`);}
    await chat.sendMessage(restoDelTexto, { mentions });
    console.log(`Comando activado: ${message.body.toLowerCase().split(' ')[0]}`);
    console.log(`Se mencionaron a ${mentions.length} usuario(s).`);
}

module.exports = { everyones }