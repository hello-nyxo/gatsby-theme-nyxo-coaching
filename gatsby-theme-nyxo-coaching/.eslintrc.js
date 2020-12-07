module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:jest/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    cy: false,
    Cypress: false,
    describe: false,
    context: false,
    beforeEach: false,
    afterEach: false,
    it: false,
    assert: false,
    expect: false,
  },
  plugins: ["@typescript-eslint", "react", "sonarjs", "jest", "unused-imports"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/camelcase": "off",
    "react/prop-types": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off", //
        "@typescript-eslint/indent": "off",
      },
    },
  ],
}
