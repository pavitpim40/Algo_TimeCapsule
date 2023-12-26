function squareRoot(n) {
  // WRITE YOUR BRILLIANT CODE HERE
  if (n == 1) return n;

  let mid = n / 2;
  while (mid ** 2 > n) {
    if (mid ** 2 > n) {
      mid--;
    } else {
      break;
    }
  }
  return Math.trunc(mid);
}

function squareRoot(n) {
  if (n === 0) return 0;
  let left = 1;
  let right = n;
  let res = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid == n) {
      return mid;
    } else if (mid * mid > n) {
      res = mid;
      right = mid - 1;
    } else {
      // target 10 , mid 3 , res 4 => return 3
      left = mid + 1;
    }
  }
  return res - 1;
}
