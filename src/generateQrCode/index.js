const { AwesomeQR } = require("awesome-qr");
const fs = require("fs");
const path = require('path');

// ...
async function generateQRCode() {
    const background = fs.readFileSync(__dirname + '\\background.jfif');

    const buffer = await new AwesomeQR({
        text: "My name, is Eric!",
        size: 500,
        backgroundImage: background,
    }).draw();

    // TODO: Use root dir
    fs.writeFileSync(__dirname + '\\..\\..\\output\\qrcode.png', buffer)
}

module.exports = { generateQRCode }