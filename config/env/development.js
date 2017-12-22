'use strict';

module.exports = {
  karma: {
    browsers: ['PhantomJS'],
    preprocessors: {
      'test/**/*.html' : ['html2js'],
      'test/**/*.json'   : ['json_fixtures']
    },
    reporters: ['progress'],
    autoWatch: true,
    singleRun: false
  }
};
