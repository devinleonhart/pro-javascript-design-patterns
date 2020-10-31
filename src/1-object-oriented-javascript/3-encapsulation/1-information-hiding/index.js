/*
  Javascript does not natively support public and private members. We need to
  use closures to hide private members, yet still provide access to them.
*/

/*
  Book should have an isbn, name and author. But we don't want these members to
  be accessed directly. validateISBN should also never be called directly.
  These are implementation details that can change. We only care about
  the interface of a class going public.
*/
const Book = function() {
  let isbn, name, author;

  function validateISBN(isbn) {
    // Obviously there's more to it but we don't care for this example.
    return typeof isbn === 'string';
  }

  this.getISBN = function() {
    return isbn;
  };

  this.setISBN = function(x) {
    if (!validateISBN(x)) throw new Error('Invalid ISBN');
    isbn = x;
  };

  this.getName = function() {
    return name;
  };

  this.setName = function(x) {
    name = x;
  };

  this.getAuthor = function() {
    return author;
  };

  this.setAuthor = function(x) {
    author = x;
  };
};

module.exports = Book;
