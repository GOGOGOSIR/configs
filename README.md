# configs

ESlint 和 Prettier 的通用配置

## Eslint Config

<p align='left'>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config'>
    <img src="https://img.shields.io/npm/v/@gogogosir/eslint-config?color=41b883&label=npm" />
  </a>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config'>
    <img src="https://img.shields.io/npm/l/@gogogosir/eslint-config?label=npm" />
  </a>
</p>

### 安装

``` bash
yarn add eslint @gogogosir/eslint-config -D
```

### 配置 `.eslintrc.js`

``` js
{
  "extends": [
    "@gogogosir"
  ]
}
```

### 在 package.json 中添加命令

举例 :

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 配置 vscode

确保在 vscode 中有安装 ```ESLint``` 插件，如果你安装了 ```Prettier-Code formatter``` 插件请禁用或卸载它

在根目录创建一个 ```.vscode/settings.json```

```json
{
  // 如果你使用了vetur请配置下下面的设置
  "vetur.format.defaultFormatter.html": "none",
  "vetur.format.defaultFormatter.ts": "none",
  "vetur.format.defaultFormatter.js": "none",
  // 必须配置的字段
  "editor.formatOnSave": false,
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



## Prettier Config

<p align='left'>
  <a href='https://www.npmjs.com/package/@gogogosir/prettier-config'>
    <img src="https://img.shields.io/npm/v/@gogogosir/prettier-config?color=41b883&label=npm" />
  </a>
   <a href='https://www.npmjs.com/package/@gogogosir/prettier-config'>
    <img src="https://img.shields.io/npm/l/@gogogosir/prettier-config?label=npm" />
  </a>
</p>

### Install

``` bash
yarn add prettier @gogogosir/prettier-config -D
```

### 配置 prettier

在 `.prettierrc.js` 中:

``` js
module.exports = {
  ...require('@gogogosir/prettier-config')

  // 下面声明的可以覆盖上面的默认配置
}
```

### 默认配置如下：

```js
{
  printWidth: 80,
  tableWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: 'preserve',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  arrowParens: 'always',
  embeddedLanguageFormatting: 'auto', // v2.1.0 可用
  singleAttributePerLine: 'false' // v2.6.0 可用
}

```
