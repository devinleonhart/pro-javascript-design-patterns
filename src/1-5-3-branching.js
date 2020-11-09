const someGlobal = 'Cheese!';

const LazyLoad = {};
LazyLoad.Singleton = (function() {
  let instance;

  const constructor = function() {
    return {
      publicMember: someGlobal === 'Cheese!' ? 'Whiz!' : 'Lame!'
    };
  };

  return {
    checkInstance: function() {
      return instance === true;
    },
    getInstance: function() {
      if (!instance) {
        instance = constructor();
      }
      return instance;
    }
  };
})();

module.exports = {
  part: 1,
  chapter: 5,
  section: 3,
  name: 'singletons',
  test: LazyLoad
};
