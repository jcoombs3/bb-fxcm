// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const unitTestTreshHolds = require('./unit-test-thresholds.json');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: require('path').join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      thresholds: unitTestTreshHolds,
      'report-config': {  html: { subdir: 'html' } },
    },
    angularCli: {
      environment: 'dev',
      codeCoverage: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    failOnEmptyTestSuite: false,
  });
};