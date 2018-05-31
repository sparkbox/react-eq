const shelljs = require('shelljs');
const chalk = require('chalk');

const env = process.env.NODE_ENV || 'development';

// Running webpack for the server twice to make sure that the file exists
// before we try to start the server
const devStartupTasks = ['npm run styles'];
const devParallelTasks = [
  '"babel --watch ./src --out-dir ./lib"',
  '"webpack -w --color"',
  '"npm run styles -- -w"',
  '"serve ."'
];
const prodTasks = [
  '"babel ./src --out-dir ./lib"',
  '"webpack -p --color"',
  '"npm run styles"'
];

console.info(chalk.green(`Starting for ${env}...`));

if (env === 'development') {
  shelljs.exec(`${devStartupTasks.join(' && ')}`);
  shelljs.exec(`concurrently ${devParallelTasks.join(' ')}`);
} else {
  shelljs.exec(`${devStartupTasks.join(' && ')}`);
}
