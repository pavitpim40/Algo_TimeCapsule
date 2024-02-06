function lonelyinteger(a) {
  // Write your code here
  let map = new Map();
  for (let n of a) {
    if (!map.get(n)) map.set(n, 1);
    else map.set(n, map.get(n) + 1);
  }

  for (let [key, value] of map) {
    if (value == 1) return key;
  }
}
