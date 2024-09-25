module.exports = {
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
