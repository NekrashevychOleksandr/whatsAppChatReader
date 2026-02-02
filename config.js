module.exports = {
  // The URL of your webhook where matched messages will be sent
  // Right now it points to webhook.site for testing
  // In production, replace this with your actual endpoint
  WEBHOOK_URL: 'https://webhook.site/f25b5345-e399-4b37-921d-c12ce1c3a294',

  // List of keywords to detect in incoming WhatsApp messages
  // The match is case-insensitive
  // Any message containing one or more of these words will trigger the webhook
  KEYWORDS: ['hiring', 'developer', 'remote', 'python']
};
