// primes = {1:2,2:3}
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2 || n == 3) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function nextPrime(n) {
  let next = n + 1;
  while (true) {
    if (isPrime(next)) return next;
    next++;
  }
}
function sumPrimes(num) {
  let sum = 0;
  let n = 1;
  let prime;
  do {
    prime = nextPrime(n);
    if (prime > num) break;
    else sum += prime;
    n = prime;
  } while (prime <= num);

  return sum;
}
sumPrimes(10);
