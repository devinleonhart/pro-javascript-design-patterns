const { part, chapter, section, name, test } = require(
  '../src/1-4-2-prototypal-inheretance'
);
const { expect } = require('chai');

const Author = test;

describe('Inheretance - Section 2', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(4);
    expect(section).to.equal(2);
    expect(name).to.equal('inheretance');
  });

  it('should use defaults from Person after cloning.', function() {
    expect(Author.name).to.equal('default name');
    expect(Author.books.length).to.equal(0);
  });

  it('should use new members after definition.', function() {
    Author.name = 'George Orwell';
    expect(Author.name).to.equal('George Orwell');
  });
});
