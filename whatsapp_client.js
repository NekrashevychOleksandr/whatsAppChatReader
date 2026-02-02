// Import the WhatsApp client and authentication helper from whatsapp-web.js
// Client = the main WhatsApp Web controller
// LocalAuth = saves session data locally so you don’t need to scan QR every time
const { Client, LocalAuth } = require('whatsapp-web.js');

// Library that prints QR codes directly into the terminal
// This lets you log in without opening a browser UI
const qrcode = require('qrcode-terminal');

// This function boots the WhatsApp client
// It accepts a callback (onMessage) so other files decide what to do with messages
function startWhatsApp(onMessage) {

  // Create a new WhatsApp client instance
  const client = new Client({
    // LocalAuth stores session files on disk (./.wwebjs_auth)
    // Without this, WhatsApp would ask for a QR scan every run
    authStrategy: new LocalAuth()
  });

  // Fired when WhatsApp requires authentication
  // WhatsApp sends us a QR code string
  client.on('qr', qr => {
    // Render the QR code in the terminal
    qrcode.generate(qr, { small: true });

    // Helpful log so you know what’s happening
    console.log('Scan this QR code with your WhatsApp mobile app');
  });

  // Fired once WhatsApp Web is fully connected and ready
  client.on('ready', () => {
    console.log('WhatsApp client ready');
  });

  // Fired every time a message is received
  // NOTE: this only fires for *incoming* messages (not sent ones)
  client.on('message', msg => {

    // Instead of handling messages here,
    // we pass the raw message object to whatever function called startWhatsApp
    // This keeps this file clean and reusable
    onMessage(msg);
  });

  // Starts the WhatsApp client
  // This launches the browser session and connects to WhatsApp Web
  client.initialize();
}

// Export the function so other files (like index.js) can start WhatsApp
module.exports = startWhatsApp;
