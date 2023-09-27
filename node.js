module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "tabWidth": 2,
        "singleQuote": false,
        "trailingComma": "es5",
        "quoteProps": "as-needed",
        "arrowParens": "always",
        "bracketSpacing": true,
        "semi": true,
        "endOfLine": "auto",
      },
    ],
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
}
