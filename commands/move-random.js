const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;

module.exports = exports = () => {
  if (bb8) {
    bb8.connect(() => {
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Command: move-random');
      bb8.color('#00ffab');
      setInterval(() => {
        var direction = Math.floor(Math.random() * 360);
        bb8.roll(1000, direction);
        console.log(direction);
      }, 1000);
    });
  }
};
