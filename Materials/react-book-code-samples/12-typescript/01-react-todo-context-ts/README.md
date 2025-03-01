# React TODO app with hooks
Simple TODO app using functional components and context with TypeSCript

[![Build Status](https://app.travis-ci.com/pxai/01-react-todo-context-ts.svg?branch=master)](https://app.travis-ci.com/pxai/01-react-todo-context-ts)

# Add TS support

```shell
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```
# Adding support for test for TypeScript
The project is created with create-react-app.
After that we need to:

```shell
yarn add jest ts-jest babel-jest
```

babel.config.js file:
```JavaScript
module.exports = {presets: ['@babel/preset-env']}
```

jest.config.js
```JavaScript
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
```
