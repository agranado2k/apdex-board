'use strict';

module.exports = {
  karma: {
    browsers: ['PhantomJS'],
    preprocessors: {
      'lib/*.js': 'coverage',
      '**/*.html' : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },
    reporters: ['progress', 'coverage'],
    autoWatch: true,
    singleRun: false
  }
};
