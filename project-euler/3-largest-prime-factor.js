function isPrime(num) {
  if (num == 2) return true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function nextPrime(prime) {
  while (!isPrime(++prime));
  return prime;
}

function largestPrimeFactor(number) {
  let divider = nextPrime(1);
  let res;
  while (divider <= number) {
    if (number % divider === 0) {
      number /= divider;
      res = divider;
    }
    divider = nextPrime(divider);
  }
  return res;
}
