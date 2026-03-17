/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2022: true, "jest/globals": true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "jest", "testing-library"],
  settings: { react: { version: "detect" } },
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}", "**/__tests__/**"],
      parserOptions: { project: "./tsconfig.jest.json" },
    },
  ],
  ignorePatterns: ["dist", "node_modules", "*.cjs"],
};
