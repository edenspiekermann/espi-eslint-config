module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        // Enforce optional chaining if possible:
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        '@typescript-eslint/prefer-optional-chain': ['error'],
      },
    },
  ],
};
