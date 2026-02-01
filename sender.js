const axios = require('axios');
const { WEBHOOK_URL } = require('./config');

async function sendToWebhook(payload) {
  try {
    await axios.post(WEBHOOK_URL, payload);
    console.log('Webhook sent:', payload);
  } catch (err) {
    console.error('Webhook error:', err.message);
  }
}

module.exports = sendToWebhook;
