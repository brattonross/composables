module.exports = {
  preset: 'ts-jest',
  rootDir: __dirname,
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.[jt]s'],
  testPathIgnorePatterns: ['/node_modules/']
}
