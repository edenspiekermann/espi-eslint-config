module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    // we don't error when files from devDependencies are imported, since we
    // need them in the .stories.js files, and we want these files to be linted,
    // but not to be exported with the repository
    'import/no-extraneous-dependencies': 'off',

    // if this rule breaks with windows users, add a `.gitattributes` to your
    // project root to disable automatic git conversion for text files (example
    // file in this repo)
    'linebreak-style': ['error', 'unix'],

    // enforce a unique quote style for object properties in a consistent way.
    'quote-props': ['error', 'consistent-as-needed'],
  },
};
