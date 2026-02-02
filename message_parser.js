// Takes a raw whatsapp-web.js Message object
// and converts it into a clean, minimal structure
function parseMessage(msg) {
  return {
    // The actual text content of the message
    text: msg.body,

    // The sender JID (phone number or group ID)
    from: msg.from,

    // The recipient JID (your number or group)
    to: msg.to,

    // true = message sent by YOU
    // false = message received from someone else
    outgoing: msg.fromMe,

    // Unix timestamp (seconds since epoch)
    // Useful for sorting and logging
    timestamp: msg.timestamp,

    // Group messages always end with '@g.us'
    // This lets us treat group & private chats differently
    isGroup: msg.from.endsWith('@g.us'),

    // In group chats:
    // - msg.author = actual sender inside the group
    // In private chats:
    // - msg.author is undefined
    author: msg.author || null
  };
}

// Export so other files can standardize messages
module.exports = parseMessage;
