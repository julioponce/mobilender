module.exports = {
  setupFiles: ['./jest/setup.js'],
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  transformIgnorePatterns: [
    'node_modules/vuex-composition-helpers',
  ],
};
