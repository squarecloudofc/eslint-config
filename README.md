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

Node.js project | Inside `.eslintrc.json`
```
{
  "extends": "@squarecloud/eslint-config/node"
}
```

React (with Next.js) | Inside `.eslintrc.json`
```
{
  "extends": [
    "@squarecloud/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

React (without Next.js) | Inside `.eslintrc.json`
```
{
  "extends": "@squarecloud/eslint-config/react"
}
```