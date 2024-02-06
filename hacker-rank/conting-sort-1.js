function countingSort(arr) {
  // Write your code here

  const countingArr = new Array(arr.length).fill(0);

  for (let n of arr) {
    countingArr[n]++;
  }
  return countingArr;
}
