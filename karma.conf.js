module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'build/tests.js',
    ],
    reporters: ['mocha'],
    autoWatch: false,
    singleRun: true,
    browsers: ['ChromeHeadless'],
  });
};
