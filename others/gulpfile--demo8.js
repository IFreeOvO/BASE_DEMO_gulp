const { watch, task } = require('gulp')

function watchFn() {
  // '!'是排除文件
  watch(['input/*.js', '!input/something.js'], function(cb) {
    // body omitted
    console.log('变动了')
    cb()
  })
}


function build(cb) {
  // body omitted
  console.log('构建')
  cb()
}





task('build', build)

exports.watchFn = watchFn