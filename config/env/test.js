'use strict';

module.exports = {
  karma: {
    browsers: ['Chrome'], // add more browsers i.e. Firefox, IE...
    preprocessors: {
      'lib/*.js': 'coverage',
      'test/**/*.html' : ['html2js'],
      'test/**/*.json'   : ['json_fixtures']
    },
    reporters: ['progress', 'coverage'],
    autoWatch: false,
    singleRun: true
  }
};
