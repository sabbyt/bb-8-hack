var sphero = require('sphero');
var config = require('home-config').load('.bb8config');

module.exports = () => {
  if (typeof (config.BB8_UUID) !== 'undefined') {
    return sphero(config.BB8_UUID);
  }
  return false;
};

module.exports.uuid = config;
