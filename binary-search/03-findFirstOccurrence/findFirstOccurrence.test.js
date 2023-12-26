const findFirstOccurrence = require('./findFirstOccurrence');

test('case-1', () => {
  expect(findFirstOccurrence([1, 2, 3, 4, 5], 1)).toBe(0);
});

test('case-2', () => {
  expect(findFirstOccurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3)).toBe(1);
});

/*
1 1 1 1 1 1 1 1 1 1 1 1
1
*/
test('case-3', () => {
  expect(findFirstOccurrence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)).toBe(0);
});

/*
1 22 22 33 50 100 20000
33
*/
test('case-4', () => {
  expect(findFirstOccurrence([1, 22, 22, 33, 50, 100, 20000], 33)).toBe(3);
});

/*
4 6 7 7 7 20
8
*/

test('case-5', () => {
  expect(findFirstOccurrence([4, 6, 7, 7, 7, 20], 8)).toBe(-1);
});

/*
6 7 9 10 10 10 90
10
*/
test('case-6', () => {
  expect(findFirstOccurrence([6, 7, 9, 10, 10, 10, 90], 10)).toBe(3);
});

/*
4
4
*/
test('case-7', () => {
  expect(findFirstOccurrence([4], 4)).toBe(0);
});

/*
2 3 5 7 11
2
*/
test('case-8', () => {
  expect(findFirstOccurrence([2, 3, 5, 7, 11], 2)).toBe(0);
});

/*
1 3 5 8 13 21
40
*/

test('case-9', () => {
  expect(findFirstOccurrence([1, 3, 5, 8, 13, 21], 40)).toBe(-1);
});
