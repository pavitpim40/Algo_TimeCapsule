const spinalCase = require('./main');
test('case-1', () => {
  expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap');
});

test('case-2', () => {
  expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap');
});

test('case-3', () => {
  expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show');
});

test('case-4', () => {
  expect(spinalCase('Teletubbies say Eh-oh')).toBe('teletubbies-say-eh-oh');
});
test('case-5', () => {
  expect(spinalCase('AllThe-small Things')).toBe('all-the-small-things');
});
