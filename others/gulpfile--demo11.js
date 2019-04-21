const Vinyl = require('vinyl');

const file = new Vinyl({
  cwd: '/',
  base: '/test/',
  path: '/test/file.js',
  contents: new Buffer.from('var x = 123')
});

console.log(file)

file.relative === 'file.js';

file.dirname === '/test';
file.dirname = '/specs';
file.path === '/specs/file.js';

file.basename === 'file.js';
file.basename = 'file.txt';
file.path === '/specs/file.txt';

file.stem === 'file';
file.stem = 'foo';
file.path === '/specs/foo.txt';
file.extname === '.txt';
file.extname = '.js';
file.path === '/specs/file.js';