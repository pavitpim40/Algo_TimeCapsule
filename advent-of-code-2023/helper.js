function aspectNumString(c) {
  if (c == 'o') return 1;
  if (c === 't') return 1;
  if (c === 's') return 1;
  if (c === 'n') return 1;
  if (c === 'f') return 1;
  else return 0;
}

function maxSlice(c) {
  if (c == 'o') return 3;
  if (c === 't') return 5;
  if (c === 's') return 5;
  if (c === 'n') return 4;
  if (c === 'f') return 4;
}
function numString(c, charInfive) {}

const text = '15ninedzhkpfstrscggbqhktwo';

for (let i = 0; i < text.length; i++) {
  let char = text[i];
  let shouldBeNumString = aspectNumString(char);
  if (shouldBeNumString) {
    let sliceLen = maxSlice(char);

    console.log(char, sliceLen);
  }
}
