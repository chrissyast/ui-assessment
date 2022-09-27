module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx'
      ],
      env: {
        jest: true
      }
    }
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false
  },
  plugins: [
    'babel',
    'react'
  ],
  rules: {
  },

}
