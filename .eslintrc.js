module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-no-bind': [2, {
      ignoreDOMComponents: false,
      allowArrowFunctions: true,
    }],
    'global-require': 0,
  },
  ignorePatterns: ['coverage/*', 'node_modules/*', 'dist/*'],
};
