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
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
    },
  ],
};
