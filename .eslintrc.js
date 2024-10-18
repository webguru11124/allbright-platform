module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Use 'jest: true' instead of 'jest/globals'
  },
  extends: ["expo", "prettier"], // Add this line
  plugins: ["prettier", "simple-import-sort"],
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
    "import/order": "off", // Disable the import/order rule
    "simple-import-sort/imports": "error", // Enable simple-import-sort
    "simple-import-sort/exports": "error", // Enable simple-import-sort for exports
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../*"],
      },
    ],
    "@typescript-eslint/ban-types": "off", // Ensure this rule is present
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json", // Specify the path to your project's tsconfig.json file
      },
    },
  },
};
