var noble = require('noble');

noble.startScanning();

noble.on('discover', (peripheral) => {
  console.log('UUID: ' + peripheral.uuid);
  console.log('Local Name: ' + peripheral.advertisement.localName);
});
