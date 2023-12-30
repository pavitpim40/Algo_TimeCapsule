function fib(n, m = {}) {
  if (n <= 0 || !n) return 0;
  if (n == 1 || n == 2) return n;
  if (m[n]) return m[n];
  if (!m[n]) {
    m[n] = m[n - 1] + m[n - 2];
    return fib(n - 1) + fib(n - 2);
  }
}

function fiboEvenSum(n) {
  let i = 1;
  let result = 0;
  while (fib(i) <= n) {
    if (fib(i) % 2 === 0) result += fib(i);
    i++;
  }
  return result;
}
