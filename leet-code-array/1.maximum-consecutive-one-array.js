// link https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
// Mine
var findMaxConsecutiveOnes = function (nums) {
  let isFoundOne = false;
  let start = 0,
    end = 0,
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!isFoundOne && nums[i] === 1) {
      isFoundOne = true;
      start = i;
    } else if (isFoundOne && nums[i] !== 1) {
      isFoundOne = false;
      end = i - 1;
      if (end - start + 1 > max) max = end - start + 1;
    }

    if (isFoundOne && i == nums.length - 1) {
      end = i;
      if (end - start + 1 > max) max = end - start + 1;
    }
  }
  return max;
};

// low Space Complexity
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;

  let flag = 0;

  nums.forEach((i, idx) => {
    if (i === 1) {
      flag++;
      if (nums.length - 1 === idx && flag > result) {
        result = flag;
      }
    } else {
      result = flag > result ? flag : result;
      flag = 0;
    }
  });
  return result;
};
