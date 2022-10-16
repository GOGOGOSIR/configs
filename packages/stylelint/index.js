module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  rules: {
    // 基础配置
    'selector-class-pattern': '.', // 校验类名
    'string-quotes': 'single',
    'max-line-length': 480,
    'no-duplicate-selectors': null,

    // 兼容 tailwindcss
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          /** tailwindcss v1, v2 */
          'variants',
          'responsive',
          'screen'
        ]
      }
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['screen', 'theme']
      }
    ]
  }
}
