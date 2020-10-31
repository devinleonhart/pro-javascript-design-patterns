const { part, chapter, section, name, test } = require(
  '../src/1-2-1-interface-class'
);
const { expect } = require('chai');

const Interface = test;

describe('Interfaces - Section 1', function() {
  it('should be the right code', function() {
    expect(part).to.equal(1);
    expect(chapter).to.equal(2);
    expect(section).to.equal(1);
    expect(name).to.equal('interfaces');
  });

  it('should check for implemented methods', function() {
    const StopWatch = function() {
      this.start = function() { return 'Stubbed Start'; };
      this.stop = function() { return 'Stubbed Stop'; };
    };
    const sw = new StopWatch();
    const inter = new Interface('StopWatch', ['start', 'stop']);
    const badInter = new Interface('StopWatch', ['pizza', 'bagel']);

    expect(inter.constructor).to.equal(Interface);
    expect(() => Interface.ensureImplements(sw, badInter)).to.throw();
  });

  it('should throw on bad interface', function() {
    const StopWatch = function() {
      this.start = function() { return 'Stubbed Start'; };
      this.stop = function() { return 'Stubbed Stop'; };
    };
    const sw = new StopWatch();
    const badInter = new Interface('StopWatch', ['pizza', 'bagel']);

    expect(badInter.constructor).to.equal(Interface);
    expect(() => Interface.ensureImplements(sw, badInter)).to.throw(/pizza/);
  });
});
