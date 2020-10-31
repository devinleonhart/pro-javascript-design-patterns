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

module.exports = {
  part: 1,
  chapter: 1,
  section: 1,
  name: 'expressive-javascript',
  test: new Counter()
};
