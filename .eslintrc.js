module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Use 'jest: true' instead of 'jest/globals'
  },
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        quoteProps: "as-needed",
        singleQuote: false,
        semi: true,
        printWidth: 80,
        useTabs: false,
        trailingComma: "es5",
        singleAttributePerLine: true,
        bracketSameLine: true,
        endOfLine: "auto",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        "newlines-between": "always",
      },
    ],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../*"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `@types` directory even it doesn't contain any source code, like `@types/unist`
        project: "./tsconfig.json", // Specify the path to your project's tsconfig.json file
      },
    },
  },
};
