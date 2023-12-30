function isSeparator(c) {
  return c == ' ' || c == '_';
}

function shouldPlaceDashSeparator(c) {
  return c && c !== '-' && c.toUpperCase() == c;
}

function spinalCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (isSeparator(c)) continue;
    result += c.toLowerCase();
    if (shouldPlaceDashSeparator(str[i + 1])) {
      result += '-';
    }
  }
  return result;
}

// spinalCase('This Is Spinal Tap');

module.exports = spinalCase;
