module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier', //关闭与 Prettier 冲突的 ESLint 规则
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser', //ts解析器
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    //eslint
    'no-var': 'error', //必须使用let和const，不能使用var
    'no-multiple-empty-lines': ['warn', { max: 1 }], //不允许多个空行
    'no-console': [
      //提交时不允许有console.log
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn', //提交时不允许有debugger,
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', //禁止不必要的转义字符
    semi: ['error', 'never'], //结尾不使用分号
    //typescript
    '@typescript-eslint/no-explicit-any': ['off'], //允许使用any
    '@typescript-eslint/no-unused-vars': 'error', //禁止定义未使用的变量
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义TypeScript模块和命名空间
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: ['that'] // this可用的局部变量名称
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off', //允许使用@ts-ignore
    '@typescript-eslint/no-non-null-assertion': 'off', //允许使用非空断言
    //eslint-plugin-vue
    'vue/multi-word-component-names': 'off', // 禁用vue文件强制多个单词命名
    'vue/script-setup-uses-vars': 'error', //防止<script setup> 使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', //不允许组件props改变
    'vue/attribute-hyphenation': 'off' //对模板中的自定义组件强制执行属性命名样式
  }
}
