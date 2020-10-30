const chapter2 = require('../src/1-object-oriented-javascript/2-interfaces');
const { expect } = require('chai');

const chapter = chapter2.chapter;
const name = chapter2.name;
const Interface = chapter2.test.section1;

describe('Chapter 2 - Section 1', function() {
  it('should be the right chapter', function() {
    expect(chapter).to.equal(2);
  });

  it('should have a name', function() {
    expect(name).to.equal('interfaces');
  });

  describe('interface class', function() {
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
});
