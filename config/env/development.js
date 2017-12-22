'use strict';

module.exports = {
  karma: {
    browsers: ['PhantomJS'],
    preprocessors: {
      '**/*.html' : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },
    reporters: ['progress'],
    autoWatch: true,
    singleRun: false
  }
};
