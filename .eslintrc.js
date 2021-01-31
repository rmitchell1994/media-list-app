module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["prettier", "prettier/react", "plugin:prettier/recommended"],
  plugins: ["react", "jest"],
  globals: {
    CONFIG: "readonly",
    config: "readonly"
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "no-unused-vars": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
    {
      files: ["*.test.ts", "*.test.tsx"],
      plugins: ["jest"],
      env: {
        es6: true,
        node: true,
        "jest/globals": true,
      },
      extends: ["plugin:jest/recommended"],
      parserOptions: {
          ecmaVersion: 2019,
          sourceType: 'module',
      },
      rules: {
          '@typescript-eslint/no-unsafe-call': 'off',
          '@typescript-eslint/no-unsafe-assignment': "off"
      }
    },
  ],
  ignorePatterns: [".eslintrc.js", "build"],
};
