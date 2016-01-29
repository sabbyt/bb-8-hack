const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;

module.exports = exports = () => {
  bb8.connect(() => {
    console.log('Connected to ' + config.BB8_LOCAL_NAME);
    console.log('Command: flashingLights');
    bb8.randomColor();
    setInterval(() => {
      bb8.randomColor();
    }, 500);
  });
};
