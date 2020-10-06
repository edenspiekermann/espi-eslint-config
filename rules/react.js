module.exports = {
  extends: [
    'airbnb',
  ],
  plugins: [
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // we don't error when files from devDependencies are imported, since we
    // need them in the .stories.js files, and we want these files to be linted,
    // but not to be exported with the repository
    'import/no-extraneous-dependencies': 'off',

    // adding this for compatibility reasons
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', {
      aspects: ['invalidHref'],
    }],

    // disabled, can be enabled when also extending `edenspiekermann/rules/react-proptypes`
    'react/prop-types': 'off',

    // this rule struggles with flow and class properties
    'react/sort-comp': 'off',

    // use react hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
