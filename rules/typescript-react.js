const TypeScriptConfig = require('./typescript');

module.exports = {
  rules: {
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      TypeScriptConfig.rules['import/extensions'][0],
      TypeScriptConfig.rules['import/extensions'][1],
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      ...TypeScriptConfig.overrides[0],

      files: ['*.tsx'],
      parserOptions: {
        ...TypeScriptConfig.overrides[0].parserOptions,

        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        ...TypeScriptConfig.overrides[0].plugins,
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
        ...TypeScriptConfig.overrides[0].settings,

        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
    },
  ],
};
