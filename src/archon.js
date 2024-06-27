const tools = require("./commands/tools")


async function main(message){
    if (message.body == undefined){return}
    const msg = message.body.toLowerCase().split(' ')[0];
    console.log(msg);
    if (msg == "@everyone") {await tools.everyones(message)}
}

module.exports = { main };