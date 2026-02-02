// Import Node.js built-in file system module
// This lets us read from and write to files on disk
const fs = require('fs');

// Import Node.js built-in path module
// This helps safely construct file paths across operating systems
const path = require('path');

// Create an absolute path to messages.json
// __dirname = directory of THIS file
// This ensures the log file always lives next to this script
const LOG_FILE = path.join(__dirname, 'messages.json');

// Function that stores a single message object to disk
function storeMessage(message) {
    
  // This array will hold all stored messages
  let data = [];

  // Check if the log file already exists
  if (fs.existsSync(LOG_FILE)) {
    // If it exists, read the file contents as a string
    // Then parse the JSON string into a JavaScript array
    data = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
  }

  // Add the new message object to the array
  data.push(message);

  // Write the updated array back to disk
  // JSON.stringify:
  //  - converts JS object → JSON
  //  - null, 2 makes it pretty-printed for readability
  fs.writeFileSync(LOG_FILE, JSON.stringify(data, null, 2));
}

// Export the function so other files can log messages
module.exports = storeMessage;
