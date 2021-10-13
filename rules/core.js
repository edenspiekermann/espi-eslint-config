module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // we don't error when files from devDependencies are imported, since we
    // need them in the .stories.js files, and we want these files to be linted,
    // but not to be exported with the repository
    'import/no-extraneous-dependencies': ['off'],

    // enforce a convention in the order of require() / import statements.
    'import/order': ['error', {
      // sort the order within each group in alphabetical manner based on path.
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#alphabetize-order-ascdescignore-caseinsensitive-truefalse
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },

      // enforced order is the same as the order of each element in a group.
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#groups-array
      'groups': [
        'builtin',
        'external',
        'parent',
        ['sibling', 'index'],
        'object',
        'unknown',
      ],

      // at least one new line between each group will be enforced, and new
      // lines inside a group will be forbidden.
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#newlines-between-ignorealwaysalways-and-inside-groupsnever
      'newlines-between': 'always',
    }],

    // never enforce default export over named exports.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': ['off'],

    // if this rule breaks with windows users, add a `.gitattributes` to your
    // project root to disable automatic git conversion for text files (example
    // file in this repo)
    'linebreak-style': ['error', 'unix'],

    // enforce a unique quote style for object properties in a consistent way.
    'quote-props': ['error', 'consistent-as-needed'],

    // use this rule in combination with 'import/order'. This rule only enables
    // the member sort of imports. Other options are disabled.
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': ['error', {
      // see 'newlines-between' option of 'import/order'
      allowSeparatedGroups: true,

      // see 'groups' option of 'import/order'
      ignoreDeclarationSort: true,

      // do not ignore the member sorting within a multiple member import
      // declaration.
      // https://eslint.org/docs/rules/sort-imports#ignoremembersort
      ignoreMemberSort: false,
    }],
  },
};
