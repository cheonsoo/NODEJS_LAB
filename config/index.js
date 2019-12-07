var ENV = 'development';
const config = require(`./${ENV}.js`);

config.ENV = ENV;
config.APP_VERSION = '0.1.3';

module.exports = config;
