module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'cypress'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:cypress/recommended',
    ],
    env: {
      browser: true,
      es2021: true,
      'cypress/globals': true,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  }
  