'use strict';

const inform = require('../lib/inform');
const chokidar = require('chokidar');
const shell = require('shelljs');

chokidar.watch('src/scss/**/*.scss').on('change', () => {
  inform.start('Sass Watch');
  shell.exec('npm run styles -- --color');
});
