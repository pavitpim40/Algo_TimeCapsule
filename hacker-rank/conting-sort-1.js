function countingSort(arr) {
  // Write your code here

  const countingArr = new Array(arr.length).fill(0);

  for (let n of arr) {
    countingArr[n]++;
  }
  let lastZeroIndex = -1;
  for (let i = 0; i < countingArr.length; i++) {
    let n = countingArr[i];
    if (lastZeroIndex == -1 && n == 0) lastZeroIndex = i;
    if (lastZeroIndex != -1 && n == 0) continue;
    else if (lastZeroIndex != -1 && n != 0) lastZeroIndex = -1;
  }

  if (lastZeroIndex != -1) {
    lastZeroIndex = lastZeroIndex === arr.length - 1 ? lastZeroIndex + 1 : lastZeroIndex;
    return countingArr.slice(0, lastZeroIndex);
  } else return countingArr;
}
