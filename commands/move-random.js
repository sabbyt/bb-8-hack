var bb8 = require(__dirname + '/../lib/uuid_config')();
var config = require(__dirname + '/../lib/uuid_config').uuid;

module.exports = () => {
  if (bb8) {
    bb8.connect(() => {
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Command: move-random');
      setInterval(() => {
        var direction = Math.floor(Math.random() * 360);
        bb8.roll(1000, direction);
      }, 1000);
    });
  }
};
