module.exports = {
  globalSetup: './__tests__/Unit/globalSetup.js',
  globalTeardown: './__tests__/Unit/globalTeardown.js',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testRegex: '__tests__/Unit/.*.(test|spec)\\.ts?$',
  cacheDirectory: '.jest/cache',
};
