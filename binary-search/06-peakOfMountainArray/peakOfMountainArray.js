function peakOfMountainArray(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let right = arr.length - 1;
  let found_index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
      found_index = mid;
    }
  }
  return found_index;
}

function peakOfMountainArray(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let right = arr.length - 1;
  let found_index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
      found_index = mid;
    }
  }
  return found_index;
}
