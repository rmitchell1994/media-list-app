module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false,
};
