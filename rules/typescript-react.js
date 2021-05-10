const TypeScriptConfig = require('./typescript');

module.exports = {
  overrides: [
    {
      files: ['*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        ...TypeScriptConfig.overrides[0].rules,

        // Restrict file extensions that may contain JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['error', {
          extensions: ['.tsx'],
        }],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        'react': {
          pragma: 'React',
          version: 'detect',
        },
      },
    },
  ],
};
