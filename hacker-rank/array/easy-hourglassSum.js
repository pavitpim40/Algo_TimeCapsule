function hourglassSum(arr) {
  const R_LEN = arr.length;
  const C_LEN = arr[0].length;
  let maxSum = -Infinity;
  for (let i = 0; i < R_LEN - 2; i++) {
    for (let j = 0; j < C_LEN - 2; j++) {
      let sum = arr[i + 1][j + 1];
      for (let k = j; k < j + 3; k++) {
        sum += arr[i][k];
        sum += arr[i + 2][k];
      }
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}
