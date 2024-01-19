function getRomanString(num, expo) {
  switch (num) {
    case 1:
      return 'I';
    case 5:
      return 'V';
    case 10:
      return 'X';
    case 50:
      return 'L';
    case 100:
      return 'C';
    case 500:
      return 'D';
    case 1000:
      return 'M';
  }

  let repeatCount = num / expo;
  if (repeatCount == 4) {
    // 4 == 5-1
    return getRomanString(expo, expo) + getRomanString(5 * expo, expo);
  } else if (repeatCount < 4) {
    // 3 == 1+1+1
    return getRomanString(expo, expo).repeat(repeatCount);
  } else if (repeatCount == 9) {
    // 9 == 10-1
    return getRomanString(expo, expo) + getRomanString(num + expo, expo);
  } else {
    // 5-8 : 5 + 1 + 1 + 1
    return getRomanString(5 * expo) + getRomanString(num - 5 * expo, expo);
  }
}

function convertToRoman(num) {
  let expo = 1;
  let result = [];
  while (num) {
    let digit = num % 10;
    num = (num - digit) / 10;

    result.unshift(digit * expo);
    expo *= 10;
  }
  return result.map((n, i) => getRomanString(n, expo / 10 ** (i + 1))).join('');
}

convertToRoman(97);
