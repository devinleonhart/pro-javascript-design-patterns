// Expand the Function prototype so you can easily add methods to new classes.
Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn;
  return this;
};

function Counter() {
  this.name = 'Counter';
  this.value = 0;
}

Counter
  .method('increment', function() {
    this.value += 1;
  })
  .method('decrement', function() {
    this.value -= 1;
  });

const test = new Counter();

module.exports = test;
