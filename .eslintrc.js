module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    mocha: true
  },
  extends: [
    'standard',
    'plugin:mocha/recommended'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'no-extend-native': 'off',
  }
};
