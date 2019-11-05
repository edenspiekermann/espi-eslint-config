module.exports = {
  extends: [
    'prettier',
    'prettier/react',
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
