const { join } = require('path');

const { ESLint } = require('eslint');

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

  describe('import/order', () => {
    it('should error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'import', 'order.unsorted.js');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);
      expect(messages).toEqual([
        expect.objectContaining({
          line: 3,
          message: '`./Component` import should occur after import of `@typescript-eslint/parser`',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 3,
          message: 'There should be at least one empty line between import groups',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 4,
          message: '`path` import should occur after import of `fs`',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 4,
          message: 'There should be at least one empty line between import groups',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 5,
          message: 'There should be at least one empty line between import groups',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 5,
          message: '`chalk` import should occur after import of `@typescript-eslint/parser`',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 6,
          message: '`../parent` import should occur after import of `@typescript-eslint/parser`',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 7,
          message: '`../../App` import should occur after import of `@typescript-eslint/parser`',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 7,
          message: 'There should be at least one empty line between import groups',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 8,
          message: 'There should be at least one empty line between import groups',
          ruleId: 'import/order',
        }),
        expect.objectContaining({
          line: 9,
          message: '`react` import should occur after import of `@typescript-eslint/parser`',
          ruleId: 'import/order',
        }),
      ]);
      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 11,
          warningCount: 0,
          fixableErrorCount: 11,
          fixableWarningCount: 0,
        }),
      );
    });

    it('should not error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'import', 'order.sorted.js');
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

  describe('import/prefer-default-export', () => {
    it('should not error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'import', 'prefer-default-export.js');
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

  describe('quote-props', () => {
    it('should warn', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'quote-props.js');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 8,
          messageId: 'redundantQuoting',
          ruleId: 'quote-props',
        }),
        expect.objectContaining({
          line: 12,
          messageId: 'inconsistentlyQuotedProperty',
          ruleId: 'quote-props',
        }),
        expect.objectContaining({
          line: 16,
          messageId: 'redundantQuoting',
          ruleId: 'quote-props',
        }),
      ]);
      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 3,
          warningCount: 0,
          fixableErrorCount: 3,
          fixableWarningCount: 0,
        }),
      );
    });
  });

  describe('sort-imports', () => {
    it('should error on non alphabetically sorted members', async () => {
      const filePath = join(__dirname, '__fixtures__', 'core', 'sort-imports.js');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 3,
          messageId: 'sortMembersAlphabetically',
          ruleId: 'sort-imports',
        }),
        expect.objectContaining({
          line: 6,
          messageId: 'sortMembersAlphabetically',
          ruleId: 'sort-imports',
        }),
      ]);
      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 2,
          warningCount: 0,
          fixableErrorCount: 2,
          fixableWarningCount: 0,
        }),
      );
    });
  });
});
