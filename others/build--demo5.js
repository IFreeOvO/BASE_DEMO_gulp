const { watch, series } = require('gulp')

function clean(cb) {
  console.log('清空')
  cb()
}

function javascript(cb) {
  console.log('处理js')
  cb()
}


function css(cb){
  console.log('处理css')
  cb()
}

watch('src/*.css', {delay:1000}, css) // 延迟1秒执行
watch('src/*.js', series(clean, javascript))


// 用命令 node .\gulpfile.js 运行, 文件名随意命名
