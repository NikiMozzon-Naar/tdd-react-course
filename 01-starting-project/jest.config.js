/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.(ts|tsx|js|jsx)", "**/*.(test|spec).(ts|tsx|js|jsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.(ts|tsx|jsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg|webp|ico)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/**/*.d.ts",
    "!src/setupTests.ts",
    "!src/**/*.test.{ts,tsx,js,jsx}",
    "!src/**/*.spec.{ts,tsx,js,jsx}",
    "!src/__mocks__/**",
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
