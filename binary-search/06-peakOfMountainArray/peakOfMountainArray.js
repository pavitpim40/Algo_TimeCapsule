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

// Solution-2
function isIncrease(prev, curr, next) {
  return prev < curr && curr < next;
}

function isDecrease(prev, curr, next) {
  return prev > curr && curr > next;
}
function isHighest(prev, curr, next) {
  return prev < curr && curr > next;
}
function peakOfMountainArray(arr) {
  let left = 0;
  let rigth = arr.length - 1;
  let foundIndex = -1;

  while (left <= rigth) {
    let mid = left + Math.floor((rigth - left) / 2);
    if (isHighest(arr[mid - 1], arr[mid], arr[mid + 1])) {
      return mid;
    }
    if (isDecrease(arr[mid - 1], arr[mid], arr[mid + 1])) {
      rigth = mid - 1;
      foundIndex = mid;
    } else {
      left = mid + 1;
    }
  }
  return foundIndex;
}
