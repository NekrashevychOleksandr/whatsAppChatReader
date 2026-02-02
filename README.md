# WhatsApp Chat Reader

A simple Node.js application that reads WhatsApp messages, stores them locally, detects keywords, and triggers a webhook when matches occur. Useful for monitoring chats, automating responses, or testing webhook workflows.

---

## Features

- Logs incoming WhatsApp messages to a local JSON file (`messages.json`)  
- Detects keywords in messages based on your configuration  
- Sends matched messages to a configurable webhook URL  
- Supports group and private messages  
- Easy to extend for additional automation  

---

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher  
- WhatsApp account on mobile  
- Internet connection  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NekrashevychOleksandr/whatsAppChatReader
cd whatsAppChatReader
```

2. Install dependencies:

npm install


3. Configure your webhook and keywords in config.js:

module.exports = {
  WEBHOOK_URL: 'https://your-webhook-url.com',
  KEYWORDS: ['hiring', 'developer', 'remote', 'python']
};


4. Start the application:

node index.js
