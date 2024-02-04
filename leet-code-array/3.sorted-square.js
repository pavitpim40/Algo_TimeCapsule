var sortedSquares = function (nums) {
  return nums.map((x) => x ** 2).sort((a, b) => a - b);
};
