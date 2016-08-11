//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './src',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
       'app/app.js',
      'app/lightbox/**/*.js',
      'test/**/*.js',
      'app/lightbox/**/*.html'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],
    preprocessors: {
      'app/lightbox/component/*.html': 'ng-html2js'
    },

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
