const { part, chapter, section, name, test } = require(
  '../src/1-3-1-information-hiding'
);
const { expect } = require('chai');

const Book = test;

describe('Encapsulation - Section 1', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(3);
    expect(section).to.equal(1);
    expect(name).to.equal('encapsulation');
  });

  it('should hide private members.', function() {
    const book = new Book();
    expect(book.isbn).to.equal(undefined);
    expect(book.name).to.equal(undefined);
    expect(book.author).to.equal(undefined);
    expect(book.validateISBN).to.equal(undefined);
  });

  it('should throw on bad isbn.', function() {
    const book = new Book();
    expect(() => book.setISBN(123)).to.throw();
  });

  it('should have working getters and setters.', function() {
    const book = new Book();
    book.setISBN('1234');
    book.setName('Book Name');
    book.setAuthor('Author Name');
    expect(book.getISBN()).to.equal('1234');
    expect(book.getName()).to.equal('Book Name');
    expect(book.getAuthor()).to.equal('Author Name');
  });
});
