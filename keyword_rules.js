// Import an array of keywords from the config file
// Example: KEYWORDS = ['price', 'job', 'hire', 'urgent']
const { KEYWORDS } = require('./config');

// Function that checks if a text contains any of the keywords
function matchKeywords(text) {
  // Convert text to lowercase so the match is case-insensitive
  const lower = text.toLowerCase();

  // Filter the keywords array:
  // - keep only those keywords that are included in the text
  // Returns an array of matched keywords (empty array if none)
  return KEYWORDS.filter(k => lower.includes(k));
}

// Export so other files can use it to detect keywords
module.exports = matchKeywords;
