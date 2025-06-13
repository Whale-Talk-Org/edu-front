module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5, // 设计稿宽度375时，1rem=37.5px，按需调整
        propList: ['*'], // 需要转换的属性，* 表示全部
        exclude: /node_modules/i // 排除 node_modules
      }
    }
  }