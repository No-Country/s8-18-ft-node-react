module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    '/database/config/config.js',
    '/database/models/',
    'package.json',
    'package-lock.json',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'padding-line-between-statements': ['error', { blankLine: 'any', prev: '*', next: '*' }],
    'linebreak-style': ['off', 'unix'],
    quotes: ['error', 'single'],
    semi: ['warn', 'never'],
  },
}
