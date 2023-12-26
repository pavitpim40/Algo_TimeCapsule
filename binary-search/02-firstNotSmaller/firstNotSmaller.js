function firstNotSmaller(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let found_index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] >= target) {
      found_index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return found_index;
}
