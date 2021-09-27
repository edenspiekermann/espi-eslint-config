module.exports = {
  extends: [
    'prettier',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      printWidth: 100,
      trailingComma: 'all',
      bracketSpacing: true,
    }],
  },
};
