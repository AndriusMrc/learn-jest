module.exports = {
  // testPathIgnorePatterns: [
  //   "<rootDir>/.next/",
  //   "<rootDir>/node_modules/",
  //   "<rootDir>/dist/",
  //   "<rootDir>/packages/",
  // ],
  collectCoverage: true,
  testEnvironment: "jsdom",
  //preset: "ts-jest",
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 92,
      lines: 97,
      statements: 97,
    },
  },
};
