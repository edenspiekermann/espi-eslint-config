import eslint from 'eslint';

export default function validate(file) {
  const engine = new eslint.CLIEngine();
  const report = engine.executeOnFiles([file]);
  return eslint.CLIEngine.getErrorResults(report.results);
}
