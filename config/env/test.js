'use strict';
var customLaunchers = {
  sl_win_chrome_63: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '63'
  },
  sl_win_chrome_62: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '62'
  },
  sl_linux_chrome_48: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Linux',
    version: '48'
  },
  sl_linux_chrome_47: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Linux',
    version: '47'
  },
  sl_linux_firefox_45: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version: '45'
  },
  sl_linux_firefox_44: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version: '44'
  },
  sl_win_firefox_57: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 10',
    version: '57'
  },
  sl_win_firefox_56: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 10',
    version: '56'
  },
  sl_mac_safari_11: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'macOS 10.13',
    version: '11.0'
  },
  sl_mac_safari_10: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.11',
    version: '10.0'
  },
  sl_ie_10: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '10'
  },
  sl_ie_11: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 8.1',
    version: '11'
  },
};

module.exports = {
  karma: {
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers), // add more browsers i.e. Firefox, IE...
    preprocessors: {
      'lib/*.js': 'coverage',
      '**/*.html' : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },
    reporters: ['progress', 'coverage', 'dots', 'saucelabs'],
    autoWatch: false,
    singleRun: true
  }
};
