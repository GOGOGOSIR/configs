module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  rules: {
    // 基础配置
    'selector-class-pattern': [
      '^([#a-z][$#{}a-z0-9]*)((-{1,2}|_{2})[$#{}a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case'
      }
    ],
    'string-quotes': 'single',
    'max-line-length': 480,
    'no-duplicate-selectors': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'no-descending-specificity': null, // 允许重复的样式名

    // 兼容 sass
    'annotation-no-unknown': [
      true,
      {
        ignoreAnnotations: ['default', 'global']
      }
    ],

    // 兼容 tailwindcss
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          /** 兼容 sass 的 @forward 语法 */
          'forward',

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
