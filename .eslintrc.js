let configuration = {
  extends: [
    './rules/core',
    './rules/jest',
  ],
  ignorePatterns: [
    'rules/__fixtures__/',
  ],
};

if (process.env.NODE_ENV === 'test') {
  // During a test run we configure eslint on our own...
  configuration = {};
}

module.exports = configuration;
