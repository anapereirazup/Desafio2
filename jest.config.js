module.exports = {
    testPathIgnorePatterns: ['node_modules'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    setupFilesAfterEnv: ['<rootDir>/src/tests/setup.js'],
    testEnvironment: 'jsdom'
  }