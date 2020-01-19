module.exports = {
  preset: 'ts-jest',
  rootDir: __dirname,
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/packages/**/__test__/**/*spec.[jt]s'],
  testPathIgnorePatterns: ['/node_modules/']
}
