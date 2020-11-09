const { part, chapter, section, name, test } = require(
  '../src/1-5-3-branching'
);
const { expect } = require('chai');

const LazyLoading = test;

describe('Singletons - Section 3', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(5);
    expect(section).to.equal(3);
    expect(name).to.equal('singletons');
  });

  it('should not instantiate immediately upon import.', function() {
    expect(LazyLoading.Singleton.checkInstance()).to.equal(false);
  });

  it('should instantiate after calling getInstance().', function() {
    LazyLoading.Singleton.getInstance();
    expect(LazyLoading.Singleton.checkInstance()).to.not.equal(true);
  });

  it(
    'should branch to Cheese Whiz after sniffing globals.',
    function() {
      expect(LazyLoading.Singleton.getInstance().publicMember).to.equal('Whiz!');
    });
});
