const startWhatsApp = require('./whatsapp_client');
const parseMessage = require('./message_parser');

startWhatsApp((msg) => {
  const parsed = parseMessage(msg);

  // Flag for outgoing messages
  parsed.outgoing = msg.fromMe;

  // Determine direction
  const direction = parsed.outgoing ? 'Sent' : 'Received';

  // Print to console
  console.log(`[${direction}] [${parsed.from}] ${parsed.body}`);

  // Optional: for debugging groups
  if (parsed.isGroup) {
    console.log(`   (Group message, author: ${parsed.author})`);
  }
});
