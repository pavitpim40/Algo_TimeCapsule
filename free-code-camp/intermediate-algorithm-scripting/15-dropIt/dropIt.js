function dropElements(arr, func) {
  let result = [];
  let isFound = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i]) && !isFound) continue;
    else {
      isFound = 1;
      result.push(arr[i]);
    }
  }
  return result;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
