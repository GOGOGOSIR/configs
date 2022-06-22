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

### 🚀 实现的功能

- [x] 集成 js 语法校验
- [x] 集成 json、jsonc、json5 语法校验
- [x] 集成 typescript 语法校验
- [x] 集成 vue 语法校验
- [x] 集成 tailwindcss 语法校验

<hr />

### 安装

``` bash
yarn add eslint @gogogosir/eslint-config -D
```

### 配置 `.eslintrc.js` 或 `.eslintrc.cjs`

``` js
module.exports = {
  'extends': [
    '@gogogosir'
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

确保在 vscode 中有安装以下插件

- **ESLint**

- **Prettier - Code formatter**

- **Format Code Action** [prettier-vscode issue](https://github.com/prettier/prettier-vscode/issues/1555)

<p style="text-indent:2em;font-weight: bold; font-size: 12px;color: orange;">
该插件用于解决 ESLint 和 Prettier 保存冲突
</p>


在根目录创建一个 ```.vscode/settings.json```

```json
{
  "prettier.enable": true,
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "vetur.format.defaultFormatter.html": "none",
  "vetur.format.defaultFormatter.ts": "none",
  "vetur.format.defaultFormatter.js": "none",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  // 保存修复
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll.eslint"
  ],
  "eslint.validate": [
    "typescript",
    "javascript",
    "javascriptreact",
    "typescriptreact",
    "json",
    "jsonc",
    "json5"
  ]
}
```

### Q&A

**1. 配置了eslint校验不生效 ?**

* 请升级 eslint 的版本必须大于 8.0.1, typescript 的版本必须大于 3.9

* 如果你项目本身安装了 ```@typescript-eslint/eslint-plugin``` 、```@typescript-eslint/parser``` 、```eslint-plugin-vue``` 这几个插件，请卸载它，因为该库已经依赖了这些库，以免因为版本不同而冲突



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
}

```
