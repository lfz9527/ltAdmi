const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off', // 是否用于禁止使用 // @ts-ignore 注释
    '@typescript-eslint/explicit-function-return-type': 'off', // 是否用于强制函数声明的返回类型
    '@typescript-eslint/no-explicit-any': 'off', // 是否用于禁止使用 any 类型
    '@typescript-eslint/no-var-requires': 'off', // 是否用于在 Node.js 环境中禁止使用 require 关键字来引入模块。
    '@typescript-eslint/no-empty-function': 'off', // 是否用于禁止空函数
    'vue/custom-event-name-casing': 'off', // 是否强制使用自定义事件名称的特定大小写
    'no-use-before-define': 'off', // 是否用于禁止在变量声明之前使用它们
    '@typescript-eslint/no-use-before-define': 'off', // ts中是否用于禁止在变量声明之前使用它们
    '@typescript-eslint/ban-ts-comment': 'off', // 是否禁止使用特定的 TypeScript 注释。
    '@typescript-eslint/ban-types': 'off', // 是否用于禁止特定的 TypeScript 类型
    '@typescript-eslint/no-non-null-assertion': 'off', // 是否用于禁止在代码中使用非空断言操作符 !
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 是否用于强制在模块边界的函数上使用显式返回类型
    '@typescript-eslint/no-unused-vars': [
      // 是否用于在 TypeScript 代码中检测和禁止未使用的变量
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      // 是否用于在 TypeScript 代码中检测和禁止未使用的变量
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off', // 是否用于检查函数定义时参数列表的括号前是否有空格

    // 是否用于规范 Vue 组件中属性的排列顺序。
    'vue/attributes-order': [
      // vue属性顺序，根据《vue样式指南》中顺序
      'warn',
      [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    ],
    'vue/one-component-per-file': 'off', // 是否用于规定每个 .vue 单文件组件应该只包含一个组件。
    'vue/html-closing-bracket-newline': 'off', // 用于规定 Vue 单文件组件模板中标签的闭合括号后是否需要换行
    'vue/max-attributes-per-line': 'singleline', // 用于规定 Vue 单文件组件模板中每行最多允许包含多少个属性
    'vue/multiline-html-element-content-newline': 'off', // 用于规定多行 HTML 元素的内容应该在新的一行开始。
    'vue/singleline-html-element-content-newline': 'off', // 用于规定单行 HTML 元素的内容是否需要换行
    'vue/attribute-hyphenation': 'never', // 用于规定 HTML 特性名必须使用连字符风格。
    'vue/require-default-prop': 'off', // 用于规定定义了默认值的 prop 必须有默认值
    'vue/html-self-closing': [
      // 用于规定是否要求自闭合标签
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
})
