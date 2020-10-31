/*
  You don't need a strict inheretance structure to share behavior and reuse
  code. The mixin pattern allows you to use a small section of inheretance to
  add behavior to a class without forming a class chain.
*/

function augment(receivingClass, givingClass) {
  for (const methodName in givingClass.prototype) {
    if (!receivingClass[methodName]) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
};

const Mixin = function() {};
Mixin.prototype = {
  sharedFunction: function() {
    return 'This is mixed in behavior';
  }
};

const Base = function() {};
augment(Base, Mixin);

module.exports = {
  part: 1,
  chapter: 4,
  section: 3,
  name: 'inheretance',
  test: Base
};
