function war(arr) {
  let max = -Infinity;
  const len = arr.length;
  console.log(len);
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let sum = 0;
      for (let k = i; k < j; k++) {
        sum += arr[k];
      }
      if (sum > max) max = sum;
    }
  }

  return max;
}

console.log(
  war([
    -54, 39, -2, -88, 42, -18, -16, -16, 0, 22, 70, 55, -57, 43, -27, 88, 28, 6, 60, -39, -85, 46,
    -57, 83, 0, -53, 0, 10, 22, -78, 26, -7, 100, -87, 47, 72, 94, -11, -42, 100, 63, -35, 39, 2,
    57, -30, -17, -75, 27, 83,
  ])
);
