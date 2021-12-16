module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/__test__/setup/setup-files-after-env.js'],
  setupFiles: ['<rootDir>/__test__/setup/setup-files.js'],
  testPathIgnorePatterns: ['<rootDir>/__test__/setup/']
};
