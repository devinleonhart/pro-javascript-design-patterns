const { part, chapter, section, name, test } = require(
  '../src/1-4-1-classical-inheretance'
);
const { expect } = require('chai');

const Author = test;

describe('Inheretance - Section 1', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(4);
    expect(section).to.equal(1);
    expect(name).to.equal('inheretance');
  });

  it('should inheret properly', function() {
    const author = new Author('George Orwell', ['1984']);
    expect(author.name).to.equal('George Orwell');
    expect(author.books[0]).to.equal('1984');
  });

  it('should be abstract before modification', function() {
    const author = new Author('George Orwell', ['1984']);
    expect(author.getName()).to.equal(
      'This is the abstract function from Person'
    );
  });

  it('should not be abstract after modification', function() {
    Author.prototype.getName = function() {
      return this.name + '!';
    };
    const author = new Author('George Orwell', ['1984']);
    expect(author.getName()).to.equal('George Orwell!');
  });
});
