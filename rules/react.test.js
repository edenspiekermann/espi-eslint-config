const { ESLint } = require('eslint');
const { join } = require('path');

describe('react rules', () => {
  let linter = null;

  beforeEach(() => {
    linter = new ESLint({
      baseConfig: {
        extends: [
          join(__dirname, 'core'),
          join(__dirname, 'react'),
        ],
        settings: {
          react: {
            version: '16.0',
          },
        },
      },
    });
  });

  afterEach(() => {
    linter = null;
  });

  describe('import/no-extraneous-dependencies', () => {
    it('should not error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'react', 'import', 'no-extraneous-dependencies.jsx');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([]);
      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 0,
          warningCount: 0,
          fixableErrorCount: 0,
          fixableWarningCount: 0,
        }),
      );
    });
  });
});
