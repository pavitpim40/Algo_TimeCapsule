function isVowel(c) {
  return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}
function translatePigLatin(str) {
  if (isVowel(str[0])) return str + 'way';
  let result = '';
  let i = 0;
  while (!isVowel(str[i]) && i < str.length) {
    result += str[i];
    i++;
  }
  return str.slice(i) + result + 'ay';
}
