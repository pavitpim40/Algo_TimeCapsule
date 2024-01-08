function fib(n, m = {}) {
  if (n == 1) return 0;
  if (n === 2) return 1;
  if (m[n]) return m[n];

  m[n] = fib(n - 1) + fib(n - 2);
  return m[n];
}

function sumFibs(num) {
  let i = 1;
  let sum = 0;
  let result = 0;
  let hashTable = {};
  do {
    result = fib(i, hashTable);
    hashTable[i] = result;
    if (result > num) break;
    if (result % 2 != 0) sum += result;
    i++;
  } while (sum <= num);
  return sum;
}
