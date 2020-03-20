module.exports = {
  globalSetup: './__tests__/Feature/globalSetup.js',
  globalTeardown: './__tests__/Feature/globalTeardown.js',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'node', 'json'],
  testRegex: '__tests__/Feature/.*.(test|spec)\\.ts?$',
  cacheDirectory: '.jest/cache',
};
