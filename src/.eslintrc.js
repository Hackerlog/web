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
    'prettier/prettier': 'error',
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    strict: 'off',
    'react/no-unescaped-entities': 'off',
    'class-methods-use-this': 'off',
    'no-debugger': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
};
