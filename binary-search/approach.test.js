const binarySearch = require('./approach');

test('case-1', () => {
  expect(binarySearch([1, 3, 5, 7, 8], 5)).toBe(2);
});
test('case-2', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6], 0)).toBe(-1);
});

test('case-3', () => {
  expect(binarySearch([2, 8, 89, 120, 1000], 120)).toBe(3);
});

test('case-4', () => {
  expect(binarySearch([10, 20], 20)).toBe(1);
});

test('case-5', () => {
  expect(binarySearch([1], 1)).toBe(0);
});

test('case-6', () => {
  expect(binarySearch([], 1)).toBe(-1);
});

test('case-7', () => {
  expect(binarySearch([1, 2, 3, 4, 5], 10)).toBe(-1);
});
