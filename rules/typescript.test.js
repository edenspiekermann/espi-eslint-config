const { join } = require('path');

const { ESLint } = require('eslint');

describe('typescript rules', () => {
  let linter = null;

  beforeEach(() => {
    linter = new ESLint({
      baseConfig: {
        extends: [
          join(__dirname, 'core'),
          join(__dirname, 'typescript'),
        ],
      },
    });
  });

  afterEach(() => {
    linter = null;
  });

  describe('prefer-optional-chain', () => {
    it('should error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'typescript', 'prefer-optional-chain.ts');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 14,
          messageId: 'preferOptionalChain',
          ruleId: '@typescript-eslint/prefer-optional-chain',
        }),
        expect.objectContaining({
          line: 17,
          messageId: 'preferOptionalChain',
          ruleId: '@typescript-eslint/prefer-optional-chain',
        }),
      ]);
      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 2,
          warningCount: 0,
          fixableErrorCount: 0,
          fixableWarningCount: 0,
        }),
      );
    });
  });
});
