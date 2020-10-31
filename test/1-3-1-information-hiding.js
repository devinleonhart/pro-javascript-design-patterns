const { name, chapter, test } = require(
  '../src/1-object-oriented-javascript/3-encapsulation'
);
const { expect } = require('chai');

const Book = test.section1;

describe('Chapter 3 - Section 1', function() {
  it('should be the right chapter', function() {
    expect(chapter).to.equal(3);
  });

  it('should have a name', function() {
    expect(name).to.equal('encapsulation');
  });

  describe('information hiding', function() {
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
});
