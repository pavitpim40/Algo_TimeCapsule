// My Solution
function findMinRotated(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let right = arr.length - 1;
  let min = Infinity;
  let found_index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < min) {
      found_index = mid;
      min = arr[mid];
    }

    if (arr[mid - 1] > arr[mid + 1] || arr[mid - 1] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return found_index;
}

function findMinRotated(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundary_index = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // if <= last element, then belongs to lower half
    if (arr[mid] <= arr[arr.length - 1]) {
      boundary_index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundary_index;
}
