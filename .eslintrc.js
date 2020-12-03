module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/...': 'off',
      }
    }
  ]
}
