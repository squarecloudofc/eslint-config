module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: ["standard", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["prettier"],
    rules: {
        "new-cap": "off",
        "prettier/prettier": [
            "error",
            {
                printWidth: 140,
                tabWidth: 2,
                singleQuote: false,
                trailingComma: "all",
                quoteProps: "as-needed",
                arrowParens: "always",
                bracketSpacing: true,
                semi: true
            }
        ]
    }
};
