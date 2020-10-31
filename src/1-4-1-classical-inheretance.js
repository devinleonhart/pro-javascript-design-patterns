/*
  Javascript does not use classical Inheretance natively. But we can simulate
  it with prototypal inheretance. We will implement an extend function that will
  allow classical inheretance.
*/

const extend = function(subClass, superClass) {
  const F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superClass = superClass.prototype;
  if (superClass.prototype.constructor === Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
};

const Person = function(name) {
  this.name = name || 'default name';
};
Person.prototype.getName = function() {
  return 'This is the abstract function from Person';
};

const Author = function(name, books) {
  Author.superClass.constructor.call(this, name);
  this.books = books || [];
};
extend(Author, Person);

module.exports = {
  part: 1,
  chapter: 4,
  section: 1,
  name: 'inheretance',
  test: Author
};
