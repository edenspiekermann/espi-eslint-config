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
      settings: {
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
      rules: {
        'react/jsx-filename-extension': ['error', {
          extensions: ['.tsx'],
        }],
      },
    },
  ],
};
