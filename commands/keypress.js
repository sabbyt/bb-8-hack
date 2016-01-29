const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;
const keypress = require('keypress');

module.exports = exports = () => {
  bb8.connect(listen);

  function handle(ch, key) {
    var stop = bb8.roll.bind(bb8, 0, 0);
    var roll = bb8.roll.bind(bb8, 200);

    if (key.ctrl && key.name === 'c') {
      process.stdin.pause();
      process.exit();
    }

    if (key.name === 'up') {
      roll(0);
      console.log('up');
      bb8.randomColor();
    }

    if (key.name === 'down') {
      roll(180);
      console.log('down');
      bb8.randomColor();
    }

    if (key.name === 'left') {
      roll(270);
      console.log('left');
      bb8.randomColor();
    }

    if (key.name === 'right') {
      roll(90);
      console.log('right');
      bb8.randomColor();
    }

    if (key.name === 'space') {
      stop();
      console.log('stop');
      bb8.color('red');
    }
  }

  function listen() {
    keypress(process.stdin);
    process.stdin.on('keypress', handle);

    console.log('control with keypress');

    process.stdin.setRawMode(true);
    process.stdin.resume();
  }
};
