const { src, symlink, lastRun, watch } = require('gulp');
const imagemin = require('gulp-imagemin');

function link() {
  return src('input/*.js')
    .pipe(dest('output/')); // 创建目标文件的软连接
}

// exports.link = link;

function images() {
  return src('src/images/**/*.jpg', { since: lastRun(images) })// 跳过自上次成功完成任务以来没有更改的文件来加快执行时间
    .pipe(imagemin())
    .pipe(dest('build/img/'));
}

function watch() {
  watch('src/images/**/*.jpg', images);
}

exports.watch = watch;