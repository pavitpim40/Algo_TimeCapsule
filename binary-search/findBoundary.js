function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let foundIndex = -1;

  while (left <= right) {
    let mid = left + Math.floor(right - left / 2);
    if (arr[mid]) {
      foundIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return foundIndex;
}

module.exports = findBoundary;
