'use strict';

var version = require('./package.json').version;

var config = {
    version: version,
    debug: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000
};

module.exports = config;