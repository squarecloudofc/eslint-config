module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "jsx-a11y",
    "@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": ["error", {
      "printWidth": 120,
      "tabWidth": 2,
      "singleQuote": false,
      "trailingComma": "es5",
      "quoteProps": "as-needed",      
      "arrowParens": "always",
      "bracketSpacing": true,
      "semi": false,
      "endOfLine": "auto",
    }],
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/no-unknown-property": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  }
}
