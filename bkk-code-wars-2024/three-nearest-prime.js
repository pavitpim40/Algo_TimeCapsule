function war() {
  let num = 123456;

  let bef = [];
  let a = num;
  while (bef.length < 2) {
    if (isPrime(a)) bef.push(a);
    a--;
  }
  let b = num;
  let af = [];
  while (af.length < 2) {
    if (isPrime(b)) af.push(b);
    b++;
  }
  let arr = bef.concat(af);
  let dif = arr.map((c) => Math.abs(c - num));

  console.log(dif);
  return arr[0] + arr[1] + arr[2];
}
