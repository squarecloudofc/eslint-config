# @squarecloud/eslint-config 

A Full-Stack ESLint config for React and Node.js projects with Next.js support and Prettier integration.
Created by [Square Cloud](https://squarecloud.app), inspired by [rocketseat-eslint](https://github.com/rocketseat/eslint-config-rocketseat).

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

Install dependencies:
```
npm install -D eslint @squarecloud/eslint-config
```

`.eslintrc.json` Node.JS project
```
{
  "extends": "@squarecloud/eslint-config/node"
}
```

`.eslintrc.json` React (with Next.js)
```
{
  "extends": [
    "@squarecloud/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

`.eslintrc.json` React (without Next.js)
```
{
  "extends": "@squarecloud/eslint-config/react"
}
```