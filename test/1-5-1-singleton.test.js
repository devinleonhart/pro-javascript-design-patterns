const { part, chapter, section, name, test } = require(
  '../src/1-5-1-singleton'
);
const { expect } = require('chai');

const Namespace = test;

describe('Singletons - Section 1', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(5);
    expect(section).to.equal(1);
    expect(name).to.equal('singletons');
  });

  it('should isolate methods from globals.', function() {
    const somePublicMethod = function() {
      return 'Oops';
    };

    expect(
      Namespace.OpenSingleton.somePublicMethod()
    ).to.equal('Hello world!');

    expect(
      Namespace.ClosedSingleton.somePublicMethod()
    ).to.equal('Hello world!');
  });

  it('should allow access to Open private vars.', function() {
    expect(
      Namespace.OpenSingleton._somePrivateVar
    ).to.equal('1234');
  });

  it('should not allow access to Closed private vars.', function() {
    expect(
      Namespace.ClosedSingleton._somePrivateVar
    ).to.equal(undefined);

    expect(
      Namespace.ClosedSingleton.somePublicVar
    ).to.equal('1234');
  });
});
