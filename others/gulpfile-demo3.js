const { rollup } = require('rollup');
const del = require('delete');
const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

// Rollup's promise API works great in an `async` task
// exports.default = async function() {
//   const bundle = await rollup({
//     input: 'src/index.js'
//   });
//   return bundle.write({
//     file: 'output/bundle.js',
//     format: 'iife'
//   });
// }


// // 删除模块用
// exports.default = function(cb) {
//   // Use the `delete` module directly, instead of using gulp-rimraf
//   del(['output/*.js'], cb);
// }


// 条件插件
function isJavaScript(file) {
  // Check if file extension is '.js'
  return file.extname === '.js';
}
exports.default = function() {
  // Include JavaScript and CSS files in a single pipeline
  return src(['src/he.js', 'src/*.css'])
    // Only apply gulp-uglify plugin to JavaScript files
    .pipe(gulpif(isJavaScript, uglify()))
    .pipe(dest('output/'));
}