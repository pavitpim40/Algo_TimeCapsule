function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    console.log(arr[i], arr[index]);
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr;
}
