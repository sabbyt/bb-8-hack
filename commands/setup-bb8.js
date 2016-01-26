const noble = require('noble');
const _ = require('lodash');

module.exports = exports = () => {
  console.log('Beginning Setup');
  noble.on('stateChange', (state) => {
    if (state === 'poweredOn') {
      console.log('Powered on');
      noble.startScanning();
    } else {
      console.log('Not powered on');
      noble.stopScanning();
    }
  });
  noble.on('discover', (peripheral) => {
    if (_.includes(peripheral.advertisement.localName, 'BB-')) {
      console.log(peripheral);
      var deviceUUID = peripheral.uuid;
      var localName = peripheral.advertisement.localName;
      console.log('Writing to config file');
      console.log('BB8 UUID - "' + deviceUUID + '"');
      console.log('Local Name: ' + localName);
      var config = require('home-config').load('.bb8config', {
        BB8_UUIsD: deviceUUID,
        BB8_LOCAL_NAME: localName
      });
      config.save();
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Saved config file, you can now ctrl+c this task');
    } else {
      console.log('This isn\'t the droid you are looking for');
      // console.log('UUID: ' + peripheral.uuid);
      // console.log('Local Name: ' + peripheral.advertisement.localName);
    }
  });
};
