module.exports = {
  rootDir: 'src',
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    './test-setup.ts',
  ],
};
