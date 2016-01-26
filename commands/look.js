const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;

module.exports = () => {
  if (bb8) {
    bb8.connect(() => {
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Command: move-random');
      bb8.color('red');
      setInterval(() => {
        var moveHead = Math.floor(Math.random() * 180);
        console.log(moveHead);
        bb8.roll(0, moveHead);
      }, 500);
    });
  }
};
