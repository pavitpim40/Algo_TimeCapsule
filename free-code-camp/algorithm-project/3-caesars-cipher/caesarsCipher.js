function rot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if ((c >= 'A' && c <= 'M') || (c >= 'a' && c <= 'm')) {
      result += String.fromCharCode(str.charCodeAt(i) + 13);
    } else if ((c >= 'N' && c <= 'Z') || (c >= 'n' && c <= 'z')) {
      result += String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      result += c;
    }
  }
  return result;
}

rot13('SERR PBQR PNZC');
