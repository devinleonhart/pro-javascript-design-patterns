/*
  Javascript natively supports prototypal inheretance. We're going to practice
  it now.
*/

function clone(object) {
  const F = function() {};
  F.prototype = object;
  return new F();
}

const Person = {
  name: 'default name',
  getName: function() {
    return this.name;
  }
};

const Author = clone(Person);
Author.books = [];

module.exports = {
  part: 1,
  chapter: 4,
  section: 2,
  name: 'inheretance',
  test: Author
};
