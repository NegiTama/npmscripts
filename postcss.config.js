module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
      cascade: true,
      grid: "autoplace"
    })
    // 圧縮するなら
    // require('cssnano')({
    //   preset: 'default',
    // })
  ]
}
