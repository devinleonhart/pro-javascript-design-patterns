const chapter1 = require('../src/1-object-oriented-javascript/1-expressive-javascript');
const { expect } = require('chai');

const chapter = chapter1.chapter;
const name = chapter1.name;
const test = chapter1.test.section1;

describe('Chapter 1 - Section 1', function() {
  it('should be the right chapter', function() {
    expect(chapter).to.equal(1);
  });

  it('should have a name', function() {
    expect(name).to.equal('expressive-javascript');
  });

  describe('Modify Prototype', function() {
    it('should have a Counter function.', function() {
      expect(test).to.be.a('object');
      expect(test.name).to.equal('Counter');
    });

    it('should have a modified the Function prototype.', function() {
      expect(Function.prototype.method).to.be.a('Function');
    });

    it('should have given Counter an increment method.', function() {
      expect(test.increment).to.be.a('Function');
    });

    it('should have given Counter a decrement method.', function() {
      expect(test.decrement).to.be.a('Function');
    });

    it('should have an initial value.', function() {
      expect(test.value).to.equal(0);
    });

    it('should increment', function() {
      test.increment();
      expect(test.value).to.equal(1);
    });

    it('should decrement', function() {
      test.decrement();
      expect(test.value).to.equal(0);
    });
  });
});
