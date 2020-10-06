const { ESLint } = require('eslint');
const { join } = require('path');

describe('core rules', () => {
  let linter = null;

  beforeEach(() => {
    linter = new ESLint({
      baseConfig: {
        extends: [
          join(__dirname, 'core'),
        ],
      },
    });
  });

  afterEach(() => {
    linter = null;
  });

  describe('import/no-extraneous-dependencies', () => {
    it('should not error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'import', 'no-extraneous-dependencies.js');
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

  describe('linebreak-style', () => {
    it('should not error for unix linebreaks', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'linebreak-style.cr.js');
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

    it('should error for windows linebreaks', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'linebreak-style.crlf.js');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 1,
          messageId: 'expectedLF',
          ruleId: 'linebreak-style',
        }),
        expect.objectContaining({
          line: 2,
          messageId: 'expectedLF',
          ruleId: 'linebreak-style',
        }),
        expect.objectContaining({
          line: 3,
          messageId: 'expectedLF',
          ruleId: 'linebreak-style',
        }),
        expect.objectContaining({
          line: 4,
          messageId: 'expectedLF',
          ruleId: 'linebreak-style',
        }),
      ]);
      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 4,
          warningCount: 0,
          fixableErrorCount: 4,
          fixableWarningCount: 0,
        }),
      );
    });
  });
});
