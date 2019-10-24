const typescript = require('./typescript');

module.exports = {
  overrides: [
    {
      ...typescript,
      files: ['*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
    },
  ],
};
