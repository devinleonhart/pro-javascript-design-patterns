const chapter2 = require('../src/1-object-oriented-javascript/2-interfaces');
const { expect } = require('chai');

const chapter = chapter2.chapter;
const name = chapter2.name;
const test = chapter2.test.section1;

describe('Chapter 2 - Section 1', function() {
  it('should be the right chapter', function() {
    expect(chapter).to.equal(2);
  });

  it('should have a name', function() {
    expect(name).to.equal('interfaces');
  });

  describe('interface class', function() {
    it('should have a name', function() {
      expect(name).to.equal('interfaces');
    });

    it('should have exported something', function() {
      expect(test).to.be.a('object');
    });
  });
});
