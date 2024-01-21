function telephoneCheck(str) {
  const regEx = /^(1?)([ ]?)(\(\d{3}\)|\d{3})([ -]?)\d{3}([ -]?)\d{4}$/;
  return regEx.test(str);
}
