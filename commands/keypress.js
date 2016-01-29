const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;
const keypress = require("keypress");

module.exports = exports = () => {
  bb8.connect(listen);

  function handle(ch, key) {
    var stop = bb8.roll.bind(bb8, 0, 0);
    var roll = bb8.roll.bind(bb8, 200);

    if (key.ctrl && key.name === "c") {
      process.stdin.pause();
      process.exit();
    }

    if (key.name === "up") {
      roll(0);
      bb8.randomColor();
    }

    if (key.name === "down") {
      roll(180);
      bb8.randomColor();
    }

    if (key.name === "left") {
      roll(270);
      bb8.randomColor();
    }

    if (key.name === "right") {
      roll(90);
      bb8.randomColor();
    }

    if (key.name === "space") {
      stop();
      bb8.color('red');
    }
  }

  function listen() {
    keypress(process.stdin);
    process.stdin.on("keypress", handle);

    console.log("Listening for arrow key presses");

    process.stdin.setRawMode(true);
    process.stdin.resume();
  }
};
