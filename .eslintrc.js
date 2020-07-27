module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended'
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/camelcase': 'off'
  },
  settings: { react: { version: 'detect' } },
  env: { node: true, browser: true }
}
