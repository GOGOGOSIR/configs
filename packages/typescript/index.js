module.exports = {
  extends: [
    '@gogogosir/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // ts
    // 强制在语句后始终使用分号
    '@typescript-eslint/semi': ['error', 'never'],
    // 接口和类型文字需要特定的成员分隔符样式
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } }
    ],
    // 需要在类型注释周围保持一致的间距
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    // 强制类型导入的一致使用
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false }
    ],
    // 强制或禁止使用记录类型
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    // // 强制使用类型导出的一致使用 (会与 vue/component-definition-name-casing 冲突)
    // '@typescript-eslint/consistent-type-exports': [
    //   'error',
    //   {
    //     fixMixedExportsWithInlineTypeSpecifier: true,
    //   },
    // ],
    // 在可能令人困惑的位置禁止非空断言
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    // 禁止不会更改模块文件中任何内容的空导出
    '@typescript-eslint/no-useless-empty-export': 'error',

    // override js
    // 不允许定义了未使用的变量
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^ignore'
      }
    ],
    // 对块执行一致的大括号样式
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    // 要求或不允许尾随逗号
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    // 强制将默认参数放在最后
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    // 缩进
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [
        'TemplateLiteral *',
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
        'TSTypeParameterInstantiation'
      ],
      offsetTernaryExpressions: true
    }],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'error',
      { before: true, after: true }
    ],
    // 要求或禁止班级成员之间有空行
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    // 禁止重复的班级成员
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    // 禁止不必要的括号
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    // 禁止this类或类对象之外的关键字
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],
    // 禁止变量重新声明
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
    // 不允许将文字作为异常抛出 (会与 vue/component-definition-name-casing 冲突)
    // 'no-throw-literal': 'off',
    // '@typescript-eslint/no-throw-literal': ['error'],
    // 禁止未使用的表达式
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    // 在定义之前禁止使用变量
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true }
    ],
    // 禁止不必要的构造函数
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    // 在大括号内强制保持一致的间距
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    // 强制一致地使用反引号、双引号或单引号
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    // 在函数括号之前强制保持一致的间距
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // 此规则旨在确保中缀运算符周围有空格。
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],

    // off
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
