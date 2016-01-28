const sphero = require('sphero');
const config = require('home-config').load('.spheroconfig');
const orb = sphero('/dev/' + config.Sphero_ID);
// const orb = require(__dirname + '/lib/sphero-config');

if (orb) {
  orb.connect(() => {
    console.log('Command: flashingLights');
    orb.randomColor();
    setInterval(() => {
      orb.randomColor();
    }, 500);
  });
}

// connecting to sphero - external modules to store sphero id isn't working
