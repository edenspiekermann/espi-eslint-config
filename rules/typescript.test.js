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

  describe('no-shadow', () => {
    it('should error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'typescript', 'no-shadow.ts');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 10,
          messageId: 'noShadow',
          ruleId: '@typescript-eslint/no-shadow',
        }),
      ]);

      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 1,
          warningCount: 0,
          fixableErrorCount: 0,
          fixableWarningCount: 0,
        }),
      );
    });
  });

  describe('no-unused-vars', () => {
    it('should error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'typescript', 'no-unused-vars.ts');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 2,
          messageId: 'unusedVar',
          ruleId: '@typescript-eslint/no-unused-vars',
        }),
        expect.objectContaining({
          line: 3,
          messageId: 'unusedVar',
          ruleId: '@typescript-eslint/no-unused-vars',
        }),
        expect.any(Object),
        expect.any(Object),
        expect.objectContaining({
          line: 4,
          messageId: 'unusedVar',
          ruleId: '@typescript-eslint/no-unused-vars',
        }),
      ]);

      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 5,
          warningCount: 0,
          fixableErrorCount: 2,
          fixableWarningCount: 0,
        }),
      );
    });
  });

  describe('no-use-before-define', () => {
    it('should error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'typescript', 'no-use-before-define.ts');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 1,
          messageId: 'noUseBeforeDefine',
          ruleId: '@typescript-eslint/no-use-before-define',
        }),
      ]);

      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 1,
          warningCount: 0,
          fixableErrorCount: 0,
          fixableWarningCount: 0,
        }),
      );
    });
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
