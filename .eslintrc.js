module.exports = {
  root:          true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType:  'module',
  },
  extends: 'eslint:recommended',
  env:     {
    node:  true,
    mocha: true,
    es6:   true,
  },
  rules: {
    'no-console':  0,
    semi:          ['error', 'never'],
    'key-spacing': ['error', { mode: 'minimum', align: 'value' }],
  },
}
