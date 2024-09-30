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
  },
};
