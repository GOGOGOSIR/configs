# config-monorepo

一些通用的配置

## eslint-config

<p align='left'>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config'>
    <img src="https://img.shields.io/npm/v/@gogogosir/eslint-config?color=41b883&label=npm" />
  </a>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config'>
    <img src="https://img.shields.io/npm/l/@gogogosir/eslint-config?label=npm" />
  </a>
</p>

eslint 的版本要 >=8.18.0

### 🚀 校验以下格式文件:

- js
- json
- markdown
- tailwindcss
- vue
- react
- ts
- yaml

### 安装

``` bash
pnpm add eslint @gogogosir/eslint-config -D
```

### 使用

- 在项目根目录新建 ```.eslintrc.cjs``` 文件
- 配置 ```.eslintrc.cjs``` 文件

```js
module.exports = {
  extends: ['@gogogosir']
}
```

### 配合 lint-staged

在 package.json 增加以下配置；

```json
{
  "lint-staged": {
    "src/**/*.{js,cjs,mjs,jsx,vue,ts,tsx,cts,mts,json,yaml}": [
      "eslint --fix --max-warnings 0"
    ],
  }
}
```

### Q&A

- 如果你项目本身安装了 eslint 的其他插件，如： @typescript-eslint/eslint-plugin 、@typescript-eslint/parser 、eslint-plugin-vue 等，请卸载它，因为该库已经依赖了这些库, 你只需安装 eslint 即可，以免因为版本不同而冲突

## stylelint-config

<p align='left'>
  <a href='https://www.npmjs.com/package/@gogogosir/stylelint-config'>
    <img src="https://img.shields.io/npm/v/@gogogosir/stylelint-config?color=41b883&label=npm" />
  </a>
   <a href='https://www.npmjs.com/package/@gogogosir/stylelint-config'>
    <img src="https://img.shields.io/npm/l/@gogogosir/stylelint-config?label=npm" />
  </a>
</p>

**stylelint** 通用配置

### 安装

```shell
pnpm add stylelint postcss-html @gogogosir/stylelint-config -D
```

### 使用

- 在项目根目录新建 ```stylelint.config.cjs``` 文件
- 配置 ```stylelint.config.cjs``` 文件

```js
module.exports = {
  extends: '@gogogosir/stylelint-config'
}

```

### 配合 lint-staged

在 package.json 增加以下配置；

```json
{
  "lint-staged": {
    "src/**/*.{css,scss}": [
      "stylelint --fix --max-warnings 0"
    ]
  }
}
```

## prettier-config

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
pnpm add prettier @gogogosir/prettier-config -D
```

### 使用

- 在项目根目录新建 ```.prettierrc.cjs``` 文件
- 配置 ```.prettierrc.cjs``` 文件

```js
module.exports = {
  ...require('@gogogosir/prettier-config')

  // 下面声明的可以覆盖上面的默认配置
}
```

### 默认配置如下：

```js
module.exports = {
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
  embeddedLanguageFormatting: 'auto' // v2.1.0 可用
  // singleAttributePerLine: 'false' // v2.6.0 可用
}
```

[tailwindcss的prettier的插件](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

### 建议

我一般建议在 html 和样式文件（如： css）中使用 prettier 格式化，像 js 等更建议用 eslint 去做格式化。原因有以下几点：

- **prettier** 与 **eslint-plugin-vue** 中的 **vue/max-attributes-per-line** 规则冲突
- **prettier** 与 **volar** 搭配 **tailwindcss** 使用 **hover** 时会产生冲突 [issue](https://github.com/johnsoncodehk/volar/issues/1448)
- [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier)

## vscode-config

- 在项目根目录新建 ```.vscode/extensions.json``` 文件
- 配置 ```extensions.json```

```json
{
  "recommendations": [
    "cpylua.language-postcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "rohit-gohri.format-code-action",
    "vue.volar"
  ]
}
```

- 在项目根目录新建 ```.vscode/settings.json``` 文件
- 配置 ```settings.json```

```json
{
  "[css]": {
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      // eslint-disable-next-line jsonc/sort-array-values
      "source.fixAll.stylelint"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      // eslint-disable-next-line jsonc/sort-array-values
      "source.fixAll.eslint"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[scss]": {
    "editor.codeActionsOnSave": [
      "source.formatDocument",
      // eslint-disable-next-line jsonc/sort-array-values
      "source.fixAll.stylelint"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "css.validate": false,
  // 保存修复
  "editor.codeActionsOnSave": [
    "source.fixAll.eslint",
    "source.fixAll.stylelint"
  ],
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "json",
    "json5",
    "jsonc",
    "typescript",
    "typescriptreact",
    "yaml",
    "yml"
  ],
  "files.associations": {
    "*.css": "postcss"
  },
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "less.validate": false,
  "prettier.enable": true,
  "scss.validate": false,
  "stylelint.enable": true,
  "stylelint.validate": [
    "css",
    "postcss",
    "scss",
    "vue"
  ],
  // 禁用 vetur
  "vetur.format.enable": false
}
```
