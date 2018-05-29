const shelljs = require('shelljs');
const chalk = require('chalk');

const env = process.env.NODE_ENV || 'development';

// Running webpack for the server twice to make sure that the file exists
// before we try to start the server
const devStartupTasks = ['npm run styles'];
const devParallelTasks = [
  '"babel --watch ./src --out-dir ./lib"',
  '"webpack -w --color"',
  '"serve ."'
];
const prodTasks = [
  'npm run styles.js',
  '"babel ./src --out-dir ./lib"',
  '"webpack -p --color"'
];

console.info(chalk.green(`Starting for ${env}...`));

if (env === 'development') {
  shelljs.exec(`${devStartupTasks.join(' && ')}`);
  shelljs.exec(`concurrently ${devParallelTasks.join(' ')}`);
} else {
  shelljs.exec(`${devStartupTasks.join(' && ')}`);
}
