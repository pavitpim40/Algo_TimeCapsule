function canDivideInRange(num, min, max) {
  for (let i = min; i <= max; i++) {
    if (num % i !== 0) return false;
  }
  return true;
}

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let num = max;
  while (!canDivideInRange(num, min, max)) {
    num += max;
  }
  return num;
}
