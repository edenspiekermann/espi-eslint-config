const { join } = require('path');

const { ESLint } = require('eslint');

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

  describe('react-hooks/exhaustive-deps', () => {
    it('should error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'react', 'react-hooks', 'exhaustive-deps.jsx');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 8,
          ruleId: 'react-hooks/exhaustive-deps',
          message: 'React Hook useEffect has a missing dependency: \'name\'. Either include it or remove the dependency array.',
        }),
        expect.objectContaining({
          line: 8,
          ruleId: 'react-hooks/exhaustive-deps',
          message: 'The null literal is not a valid dependency because it never changes. You can safely remove it.',
        }),
        expect.objectContaining({
          line: 14,
          ruleId: 'react-hooks/exhaustive-deps',
          message: 'React Hook useEffect has missing dependencies: \'name\' and \'surname\'. Either include them or remove the dependency array.',
        }),
      ]);
      expect(rest).toEqual(
        expect.objectContaining({
          errorCount: 3,
          warningCount: 0,
          fixableErrorCount: 0,
          fixableWarningCount: 0,
        }),
      );
    });
  });

  describe('react-hooks/rules-of-hooks', () => {
    it('should error', async () => {
      const filePath = join(__dirname, '__fixtures__', 'react', 'react-hooks', 'rules-of-hooks.jsx');
      const [{ messages, ...rest }] = await linter.lintFiles([filePath]);

      expect(messages).toEqual([
        expect.objectContaining({
          line: 7,
          ruleId: 'react-hooks/rules-of-hooks',
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
});
