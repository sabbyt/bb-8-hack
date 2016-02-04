const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;

module.exports = exports = () => {
  bb8.connect(() => {
    console.log(bb8);
    console.log('Connected to ' + config.BB8_LOCAL_NAME);
    console.log('Command: looky');
    bb8.color('red');
    setInterval(() => {
      var moveHead = Math.floor(Math.random() * 180);
      console.log(moveHead);
      bb8.roll(0, moveHead);
    }, 500);
  });
};
