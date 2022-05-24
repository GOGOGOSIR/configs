# @gogogosir/eslint-config

<p align='left'>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config'>
    <img src="https://img.shields.io/npm/v/@gogogosir/eslint-config?color=41b883&label=npm" />
  </a>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config'>
    <img src="https://img.shields.io/npm/l/@gogogosir/eslint-config?label=npm" />
  </a>
</p>

## 🚀 Features

- vue3 的校验
- ts 的校验
- json 的校验
- 集成了 eslint-config-standard 包，并自定义了一些常用配置

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





