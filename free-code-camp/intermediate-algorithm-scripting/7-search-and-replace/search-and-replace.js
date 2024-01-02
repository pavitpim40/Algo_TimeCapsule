function isStartWithUpperCase(str) {
  return str[0].toUpperCase() === str[0];
}

function convertToStartWithUpperCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function myReplace(str, before, after) {
  let isUpper = isStartWithUpperCase(before);

  if (isUpper) after = convertToStartWithUpperCase(after);
  else after = after.toLowerCase();

  return str.replace(before, after);
}
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
