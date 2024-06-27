// Importing the necessary modules
const { Client, NoAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode");
const qrterminal = require("qrcode-terminal");
const archon = require ("./src/archon")

const client = new Client({
    puppeteer: {headless: true,args: ["--no-sandbox", "--disable-setuid-sandbox"]},
    webVersionCache: {type: "remote",remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html"},
    authStrategy: new NoAuth()});

client.on("qr", async (qr) => {
    try {
        await qrcode.toFile("./qrcode.png", qr);
        console.log("QR Code saved as qrcode.png");
        qrterminal.generate(qr, {small: true});
    } catch (err) {
        console.error(err);
    }});

client.on("message", async (msg) => {
    await archon.main(msg);
});

client.on("ready", () => {
    console.log("Bot is On");
});
    

client.initialize();
