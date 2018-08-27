const { resolve } = require('path');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  root: true,
  extends: ['airbnb', 'plugin:jsx-a11y/recommended', 'prettier', 'prettier/react'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    complexity: [1, 4],
    'prettier/prettier': 2,
    'linebreak-style': 0,
    'react/prop-types': 0,
    strict: 0,
    'react/no-unescaped-entities': 0,
    'class-methods-use-this': 0,
    'no-debugger': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
};
