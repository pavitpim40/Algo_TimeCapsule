function dynamicArray(n, queries) {
  // Write your code here

  const arr = Array.from({ length: n }, (x) => new Array());
  const ansArr = [];
  let lastAnswer = 0;
  for (let i = 0; i < queries.length; i++) {
    const [op, x, y] = queries[i];
    let idx = (x ^ lastAnswer) % n;
    if (op == 1) {
      arr[idx].push(y);
    } else if (op == 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      ansArr.push(lastAnswer);
    }
  }

  return ansArr;
}
