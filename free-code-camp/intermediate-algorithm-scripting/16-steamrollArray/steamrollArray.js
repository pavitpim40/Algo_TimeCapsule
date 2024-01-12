function myFlat(arr, res) {
  for (let el of arr) {
    if (!Array.isArray(el)) res.push(el);
    else myFlat(el, res);
  }
  return res;
}

function steamrollArray(arr) {
  const result = [];
  return myFlat(arr, result);
}
