const sphero = require('sphero');
const config = require('home-config').load('.bb8config');

module.exports = exports = () => {
  if (typeof (config.BB8_UUIsD) !== 'undefined') {
    console.log('connect run');
    return sphero(config.BB8_UUIsD);
  }
  console.log('fail in uuid config');
  return false;
};

module.exports.uuid = config;
