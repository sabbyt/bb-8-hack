const sphero = require('sphero');
const fs = require('fs');
var matchy;

function find(key, array) {
  var results = [];
  for (var i = 0; i < array.length; i += 1) {
    if (array[i].indexOf(key) === 0) {
      results.push(array[i]);
    }
  }
  return results;
}

module.exports = exports = () => {
  console.log('Beginning Setup');
  fs.readdir('/dev', (err, files) => {
    if (err) throw err;
    const spheroFile = 'tty.Sphero';
    matchy = find(spheroFile, files);
    console.log(matchy[0]);
    var config = require('home-config').load('.spheroconfig', {
      Sphero_ID: matchy[0]
    });
    config.save();
    console.log('Connected to ' + config.Sphero_ID);
    console.log('Saved config file, you can now ctrl+c this task');
  });
};
