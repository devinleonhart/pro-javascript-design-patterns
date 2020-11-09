/*

The singleton pattern takes advantage of encapsulation provide namespaces and
reduce globals in our code. It's a very common organizational technique, a
fundamental of JavaScript.

*/

const Namespace = {};

const OpenSingleton = {
  _somePrivateVar: '1234',
  somePublicVar: '5678',
  somePublicMethod: function() {
    return 'Hello world!';
  }
};

const ClosedSingleton = (function() {
  const _somePrivateVar = '1234';

  return {
    somePublicVar: _somePrivateVar,
    somePublicMethod: function() {
      return 'Hello world!';
    }
  };
})();

Namespace.OpenSingleton = OpenSingleton;
Namespace.ClosedSingleton = ClosedSingleton;

module.exports = {
  part: 1,
  chapter: 5,
  section: 1,
  name: 'singletons',
  test: Namespace
};
