// const { series, src, dest } = require('gulp')
// const { EventEmitter} = require('events') // 事件提交
const { exec } = require('child_process') // 子进程
const fs = require('fs')

function callbackTask(cb) {
  // `cb()` should be called by some async work
  cb('哈')
}

function passingCallback(cb) {
  fs.access('gulpfile.js', function(err)  {
    console.log('好了')
    cb()
  })
}

async function asyncAwaitTask() {
  const { version } = fs.readFileSync('package.json');
  console.log(version);
  await Promise.resolve('some result');
}


// function steamTask() {
//   return src('*.js')
//           .pipe(dest('output')) // 放到目标文件
// }

// function promiseTask() {
//   return Promise.resolve('the value is ignored');
// }

// function eventEmitterTask() {
//   const emitter = new EventEmitter()
//   setTimeout(() => {
//     console.log('执行')
//     emitter.emit('finish') // 必须写finish,不能瞎写字符串
//   }, 2000)
//   return emitter
// }

// function childProcessTask() {
//   console.log('日期')
//   return exec('date');
// }

// process.env.NODE_ENV = 'production'
// if(process.env.NODE_ENV === 'production') {
//   // 通过 NODE_ENV=production npx gulp build 切换执行环境
//   exports.build = steamTask //  通过 npx gulp build 执行
// } else {
//   exports.build = childProcessTask //  通过 npx gulp build 执行
// }

exports.default = asyncAwaitTask //  通过 npx gulp default 执行, default可省略

// 查看任务命令    npx gulp --tasks
