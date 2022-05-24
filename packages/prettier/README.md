# @gogogosir/prettier-config

<p align='left'>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config-basic'>
    <img src="https://img.shields.io/npm/v/@gogogosir/eslint-config-basic?color=41b883&label=npm" />
  </a>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config-basic'>
    <img src="https://img.shields.io/npm/l/@gogogosir/eslint-config-basic?label=npm" />
  </a>
</p>

## Install

``` bash
yarn add prettier @gogogosir/prettier-config -D
```

## 配置 prettier

在 `.prettierrc.js` 中:

``` js
{
  ...require('@gogogosir/prettier-config')

  // 下面声明的可以覆盖上面的默认配置
}
```

## 默认配置如下：

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




