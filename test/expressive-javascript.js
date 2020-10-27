const part1 = require('../src/object-oriented-javascript/expressive-javascript');
const { expect } = require('chai');

const name = part1.name;
const sw = part1.test.sw;

describe('Part 1 - Expressive Javascript', function() {
  describe('Function Method', function() {
    it('should have a name', function() {
      expect(name).to.equal('expressive-javascript');
    });

    it('should have a Counter function.', function() {
      expect(sw).to.be.a('object');
      expect(sw.name).to.equal('Counter');
    });

    it('should have a modified the Function prototype.', function() {
      expect(Function.prototype.method).to.be.a('Function');
    });

    it('should have given Counter an increment method.', function() {
      expect(sw.increment).to.be.a('Function');
    });

    it('should have given Counter a decrement method.', function() {
      expect(sw.decrement).to.be.a('Function');
    });

    it('should have an initial value.', function() {
      expect(sw.value).to.equal(0);
    });

    it('should increment', function() {
      sw.increment();
      expect(sw.value).to.equal(1);
    });

    it('should decrement', function() {
      sw.decrement();
      expect(sw.value).to.equal(0);
    });
  });
});
