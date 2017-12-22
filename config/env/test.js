'use strict';

module.exports = {
  karma: {
    browsers: ['Chrome'], // add more browsers i.e. Firefox, IE...
    preprocessors: {
      'lib/*.js': 'coverage',
      '**/*.html' : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },
    reporters: ['progress', 'coverage'],
    autoWatch: false,
    singleRun: true
  }
};
