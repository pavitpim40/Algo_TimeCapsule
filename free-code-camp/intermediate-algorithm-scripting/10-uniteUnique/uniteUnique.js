function uniteUnique(...arr) {
  let hashMap = {};
  let result = [];
  for (let subArr of arr) {
    for (let num of subArr) {
      if (!hashMap[num]) {
        hashMap[num] = num;
        result.push(num);
      }
    }
  }
  return result;
}
