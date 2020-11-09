const { part, chapter, section, name, test } = require(
  '../src/1-5-2-lazy-loading'
);
const { expect } = require('chai');

const LazyLoading = test;

describe('Singletons - Section 2', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(5);
    expect(section).to.equal(2);
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
    'should allow access to public members after getInstance() has been called',
    function() {
      expect(LazyLoading.Singleton.getInstance().publicMember).to.equal('5678');
    });
});
