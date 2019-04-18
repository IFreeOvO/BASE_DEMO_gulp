const { src, dest } = require('gulp');
const uglify = require('gulp-uglify')

function copy() {
  return src(['input/*.js'], {sourcemaps: true})
    .pipe(uglify())
    .pipe(dest('output/', {sourcemaps: 'temp'}));  // 把文件存放某个文件下
}

// function copy() {
//   return src('input/**/*.js', { sourcemaps: true })
//   .pipe(uglify())
//   .pipe(dest('output/', { sourcemaps: true }));
// }

exports.copy = copy;

// npx gulp copy执行 