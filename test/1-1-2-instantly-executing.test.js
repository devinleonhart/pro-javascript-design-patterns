const { part, chapter, section, name, test } = require(
  '../src/1-1-2-instantly-executing'
);
const { expect } = require('chai');

const result = test;

describe('Expressive Javascript - Section 2', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(1);
    expect(section).to.equal(2);
    expect(name).to.equal('expressive-javascript');
  });

  it('should have given access to internal members.', function() {
    expect(result).to.be.a('number');
    expect(result).to.equal(8);
  });
});
