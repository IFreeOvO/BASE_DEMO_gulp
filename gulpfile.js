const { src, dest, task} = require('gulp')
const del = require('delete')

const path = 'output/pages/'

function copyTemplate() {
  return src('template/*')
          .pipe(dest(`${path}/`))
}

function clean(cb) {
  return del([`${path}/`], cb)
}

task('default', copyTemplate)
task('clean', clean)