const chapter1 = require('../src/1-object-oriented-javascript/1-expressive-javascript');
const { expect } = require('chai');

const chapter = chapter1.chapter;
const name = chapter1.name;
const test = chapter1.test.section2;

describe('Chapter 1 - Section 2', function() {
  it('should be the right chapter', function() {
    expect(chapter).to.equal(1);
  });

  it('should have a name', function() {
    expect(name).to.equal('expressive-javascript');
  });

  describe('Instantly Executing', function() {
    it('should have a name', function() {
      expect(name).to.equal('expressive-javascript');
    });

    it('should have given access to internal members.', function() {
      expect(test).to.be.a('number');
      expect(test).to.equal(8);
    });
  });
});
