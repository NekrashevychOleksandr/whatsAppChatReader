// Import your WhatsApp client starter function
const startWhatsApp = require('./whatsapp_client');

// Import the message parser that normalizes raw WhatsApp messages
const parseMessage = require('./message_parser');

// Import your local storage function
const storeMessage = require('./message_store');

// Import keyword filtering function
const matchKeywords = require('./keyword_rules');

// Import webhook sender function
const triggerWebhook = require('./sender');

// Start the WhatsApp client
// Pass a callback that is called whenever a new message is received
startWhatsApp(async (msg) => {

  // Ignore outgoing messages (sent by yourself)
  // If you want to log sent messages too, remove this line
  if (msg.fromMe) return;

  // Parse the raw message into a clean, consistent format
  const parsed = parseMessage(msg);

  // Store every message locally in messages.json
  storeMessage(parsed);

  // Print the message to the console for debugging
  console.log(`[RECEIVED] ${parsed.text}`);

  // Check if this message contains any of the configured keywords
  const matches = matchKeywords(parsed.text);

  // If any keyword matched
  if (matches.length > 0) {
    console.log('⚠ Keyword match:', matches);

    // Send the message + matched keywords to your webhook
    // This is where the automation happens
    await triggerWebhook({
      matches,       // array of matched keywords
      message: parsed // the full parsed message object
    });
  }
});
