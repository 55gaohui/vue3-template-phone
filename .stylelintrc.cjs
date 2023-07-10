module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-less',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier', //预定义的配置文件,确保 Stylelint规则和Prettier 很好地集成。
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-prettier'], //集成 Prettier 的插件
  customSyntax: 'postcss-html',
  overrides: [
    {
      files: ['**/*.(less|css|vue|html)'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    //未知的伪元素，它将触发该规则的错误提示
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      }
    ],
    "prettier/prettier": true,  //确保stylelint-prettier，用的是 Prettier 的格式化规则
    "number-leading-zero": "always", //小数前面需要添加 0
    "no-empty-source": null //vue style空的样式规则
  }
}
