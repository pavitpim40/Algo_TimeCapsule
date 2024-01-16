const Person = function (first, last) {
  let firstName = first;
  let lastName = last;
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = function (f) {
    return (firstName = f);
  };
  this.setLastName = function (l) {
    return (lastName = l);
  };
  this.setFullName = function (first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
