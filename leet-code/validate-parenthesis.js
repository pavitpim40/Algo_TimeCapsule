var isValid = function (s) {
  const arr = [];
  const map = { '(': ')', '[': ']', '{': '}' };
  for (let c of s) {
    if (c == '(' || c == '[' || c == '{') {
      arr.push(c);
    } else if (c == ')' || c == ']' || c == '}') {
      if (map[arr.pop()] !== c) return false;
    }
  }
  return arr.length === 0;
};
