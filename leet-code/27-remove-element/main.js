var removeElement = function (nums, val) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] == val) {
      let j = i + 1;
      while (j < nums.length) {
        if (nums[j] != val) {
          let temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
        j++;
      }
    }
    i++;
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) count++;
  }
  return count;
};
