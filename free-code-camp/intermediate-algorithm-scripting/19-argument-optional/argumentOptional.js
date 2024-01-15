function isNum(n) {
  return typeof n === 'number';
}
function addTogether(a, b) {
  if (arguments.length == 2 && isNum(a) && isNum(b)) {
    return a + b;
  }

  if (arguments.length == 1 && isNum(a)) {
    return (x) => addTogether(a, x);
  }

  return;
}

addTogether(2, 3);
