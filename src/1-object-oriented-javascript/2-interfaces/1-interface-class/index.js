/*
  Javascript does not natively support the Interface pattern. We have to
  implement the Interface class ourselves to use the pattern.
*/
const Interface = function(name, methods) {
  if (arguments.length !== 2) {
    throw new Error(
      'Interface constructor called with ' +
      arguments.length +
      ' arguments, but expected exactly 2'
    );
  }

  if (typeof name !== 'string') {
    throw new Error(
      'Interface constructor expects interface name to be a string.' +
      'Received' + typeof name + '.'
    );
  }

  for (let i = 0; i < methods.length; i++) {
    if (typeof methods[i] !== 'string') {
      throw new Error(
        'Interface constructor expects method names to be a string.' +
        'Received' + typeof method + '.'
      );
    }
  }

  this.name = name;
  this.methods = methods;
};

Interface.ensureImplements = function(object) {
  if (arguments.length < 2) {
    throw new Error(
      'Function Interface.ensureImplements called with ' +
      arguments.length +
      ' arguments, but expected at least 2.'
    );
  }

  for (let i = 1; i < arguments.length; i++) {
    const inter = arguments[i];

    if (inter.constructor !== Interface) {
      throw new Error(
        'Function Interface.ensureImplements expects arguments 2 and above to' +
        'be instances of Interface.'
      );
    }

    for (let j = 0; j < inter.methods.length; j++) {
      const method = inter.methods[j];
      if (!object[method] || typeof object[method] !== 'function') {
        throw new Error(
          'Function Interface.ensureImplements: object does not implement the ' +
          inter.name +
          ' interface. Method ' +
          method +
          ' was not found.'
        );
      }
    }
  }
  return true;
};

module.exports = Interface;
