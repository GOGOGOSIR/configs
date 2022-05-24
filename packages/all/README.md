# @gogogosir/eslint-config

<p align='left'>
  <a href='https://www.npmjs.com/package/@gogogosir/eslint-config'>
    <img src="https://img.shields.io/npm/v/@gogogosir/eslint-config?color=41b883&label=npm" />
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
    "lint": "eslint \"**/*.{vue,ts,js}\""
  }
}
```



