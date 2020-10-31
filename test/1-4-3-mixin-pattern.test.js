const { part, chapter, section, name, test } = require(
  '../src/1-4-3-mixin-pattern'
);
const { expect } = require('chai');

const Base = test;

describe('Inheretance - Section 3', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(4);
    expect(section).to.equal(3);
    expect(name).to.equal('inheretance');
  });

  it('should use defaults from Person after cloning.', function() {
    const base = new Base();
    expect(typeof base.sharedFunction).to.equal('function');
    expect(base.sharedFunction()).to.equal('This is mixed in behavior');
  });
});
