const part1 = require('../src/1-object-oriented-javascript/1-expressive-javascript');
const { expect } = require('chai');

const name = part1.name;
const test = part1.test.section2;

describe('Part 1 - Expressive Javascript', function() {
  describe('Function Method', function() {
    it('should have a name', function() {
      expect(name).to.equal('expressive-javascript');
    });

    it('should have given access to internal members.', function() {
      expect(test).to.be.a('number');
      expect(test).to.equal(8);
    });
  });
});
