function isAlphaNumeric(char) {
  if ((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || (char >= '0' && char <= '9'))
    return true;
  return false;
}
function palindrome(str) {
  let normalizeStr = '';
  for (let c of str) {
    if (isAlphaNumeric(c)) {
      normalizeStr += c.toLowerCase();
    }
  }
  let len = normalizeStr.length;
  for (let i = 0; i < len / 2; i++) {
    if (normalizeStr[i] != normalizeStr[len - 1 - i]) return false;
  }
  return true;
}

palindrome('eye');
