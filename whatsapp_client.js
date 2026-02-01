const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

function startWhatsApp(onMessage) {
  const client = new Client({
    authStrategy: new LocalAuth() // stores login so you don't scan QR every time
  });

  client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR code with your WhatsApp mobile app');
  });

  client.on('ready', () => {
    console.log('WhatsApp client ready');
  });

  client.on('message', msg => {
    onMessage(msg);
  });

  client.initialize();
}

module.exports = startWhatsApp;
