module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 39, // 设计稿宽度390
      propList: ['*', '!font-size', '!line-height'], // 忽略字体大小和行高转换
      minPixelValue: 1, // 小于或等于2px的不转换（可选）
      exclude: /node_modules/i // 排除 node_modules
    }
  }
}