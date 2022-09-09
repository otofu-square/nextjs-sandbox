module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./apps/*/tsconfig.json"],
  },
  extends: ["timetree/base"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true }],
  },
};
