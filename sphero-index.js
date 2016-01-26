const sphero = require('sphero');
const config = require('home-config').load('.spheroconfig');
const orb = sphero('/dev/' + config.Sphero_ID);
// const orb = require(__dirname + '/lib/sphero-config');

orb.connect(() => {
  console.log('Connected to Sphero');
  console.log('Command: blue');
  orb.color('blue');
});
