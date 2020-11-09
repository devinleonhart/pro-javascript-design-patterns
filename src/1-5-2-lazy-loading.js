const LazyLoad = {};
LazyLoad.Singleton = (function() {
  let instance;

  const constructor = function() {
    const privateMember = '1234';

    return {
      publicMember: '5678'
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
  section: 2,
  name: 'singletons',
  test: LazyLoad
};
