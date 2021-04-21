const { AwesomeQR } = require("awesome-qr");
const fs = require("fs");
const { mainModule } = require("process");

// ...
async function main() {
    const background = fs.readFileSync("background.jfif");

    const buffer = await new AwesomeQR({
        text: "AwesomeQR by Makito - Awesome, right now.",
        size: 500,
        backgroundImage: background,
    }).draw();

    fs.writeFileSync("qrcode.png", buffer);
}
main()