// Wrap a function in () and execute it immediately to isolate scope.

let closure;

(function() {
  const x = 4;
  const y = 2;
  closure = function() {
    return x * y;
  };
})();

// x and y are not accessable here. They have been garbage collected.
// closure was defined here and is available for the iefe to modify, so we can export it.

// The reason this works is called "Lexical Scoping". closure is being executed in the context
// of the iefe where x and y exist and not here.
module.exports = {
  part: 1,
  chapter: 1,
  section: 2,
  name: 'expressive-javascript',
  test: closure()
};
