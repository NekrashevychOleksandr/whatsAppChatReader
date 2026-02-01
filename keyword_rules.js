const { KEYWORDS } = require('./config');

function matchKeywords(text) {
  const lower = text.toLowerCase();
  return KEYWORDS.filter(k => lower.includes(k));
}

module.exports = matchKeywords;
