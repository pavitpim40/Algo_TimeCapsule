function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundary_index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] == target) {
      boundary_index = mid;
      right = mid - 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundary_index;
}

module.exports = findFirstOccurrence;
