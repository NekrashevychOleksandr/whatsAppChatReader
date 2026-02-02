// Import axios, a popular HTTP client for making requests (GET, POST, etc.)
const axios = require('axios');

// Import the webhook URL from your config file
// This keeps secrets and environment-specific values out of your logic
const { WEBHOOK_URL } = require('./config');

// Asynchronous function that sends data to a webhook endpoint
// "payload" is usually a JavaScript object containing message details
async function sendToWebhook(payload) {
  try {
    // Send an HTTP POST request to the webhook URL
    // The payload becomes the JSON body of the request
    await axios.post(WEBHOOK_URL, payload);

    // Log success so you know the webhook was triggered correctly
    console.log('Webhook sent:', payload);
  } catch (err) {
    // If the request fails (network error, 500 error, bad URL, etc.)
    // we catch the error instead of crashing the app
    console.error('Webhook error:', err.message);
  }
}

// Export the function so other files can trigger webhooks
module.exports = sendToWebhook;
