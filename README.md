# New comments made by me in portuguese

## Criando front com react

### Na pasta root do projeto:
> yarn create react-app <Nome do App front>

> yarn add eslint -D

> yarn eslint --init

###  `apagar o package-lock.json`

## Pra atualizar o yarn.lock:
> yarn

> yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

### Configurar

## .prettierrc,

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}

```

## .eslintrc.js,

```
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb', 'prettier', 'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn', {
        extension: ['.jsx','.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ["error", {allow: [ "tron" ] }]
  },
};

```

## .editorconfig

```
root = true

[*]
end_of_line = lf;
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

```

### Então executar:
<!--
> yarn add react-router-dom

`Opcional por enquanto:`
> yarn start

> yarn add styled-components -->

> yarn add react-router-dom styled-components react-icons axios prop-types polished

## Iniciar o webserver:
> yarn start
<!--
> yarn add axios

> yarn add prop-types

> yarn add polished -->

# Final package.json

```
{
  "name": "module05",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.19.0",
    "polished": "^3.4.1",
    "prop-types": "^15.7.2",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-icons": "^3.7.0",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.1.0",
    "styled-components": "^4.3.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "babel-eslint": "^10.0.2",
    "eslint": "^5.16.0",
    "eslint-config-airbnb": "^17.1.1",
    "eslint-config-prettier": "^6.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-react": "^7.14.3",
    "prettier": "^1.18.2"
  }
}
```
