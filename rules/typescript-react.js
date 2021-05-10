const TypeScriptConfig = require('./typescript');

module.exports = {
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
