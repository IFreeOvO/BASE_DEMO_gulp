const { src, dest} = require('gulp')
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')
const rename = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
          .pipe(babel()) // 转es5
          .pipe(dest('output/'))
          .pipe(uglify()) // 压缩
          .pipe(rename({ extname: '.min.js' }))
          .pipe(dest('output/'))
}