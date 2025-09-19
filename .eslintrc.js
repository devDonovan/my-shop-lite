module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react-native'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-undef': 'off',
  },
  globals: {
    Text: 'readonly',
    localStorage: 'readonly',
  },
  ignorePatterns: ['node_modules/', 'android/', 'ios/', '.expo/'],
};
