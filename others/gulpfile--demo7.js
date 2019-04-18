const { series } = require('gulp');

function javascript(cb) {
  // body omitted
  console.log('js')
  cb();
}

function css(cb) {
  console.log('css')
  // body omitted
  cb();
}

exports.build = series(javascript, css); //顺序执行


// const { parallel } = require('gulp');

// function javascript(cb) {
//   console.log('js')
//   cb();
// }

// function css(cb) {
//   console.log('css')
//   cb();
// }

// exports.build = parallel(javascript, css); // 并行执行