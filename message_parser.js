function parseMessage(msg) {
  return {
    from: msg.from,                 // WhatsApp ID of sender
    author: msg.author || msg.from, // Real sender in groups
    body: msg.body,                 // Message text
    isGroup: msg.from.endsWith('@g.us'),
    timestamp: msg.timestamp
  };
}

module.exports = parseMessage;
