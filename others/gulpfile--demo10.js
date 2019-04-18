
const { tree, series, parallel } = require('gulp');

function one(cb) {
  console.log('1')
  // body omitted
  cb();
}

function two(cb) {
  console.log('2')
  // body omitted
  cb();
}

function three(cb) {
  console.log('3')
  // body omitted
  cb();
}

const four = series(one, two);

const five = series(four,
  parallel(three, function(cb) {
    // Body omitted
    console.log(tree({deep: true}))
    cb();
  })
);

module.exports = { one, two, three, four, five };