'use strict';

//Sauce env config
process.env.SAUCE_USERNAME="agranado";
process.env.SAUCE_ACCESS_KEY="74512ba1-f302-44d4-84a7-026fda5e64e6";

var configSource = process.env.NODE_ENV || 'development';
module.exports = require('./env/' + configSource);
