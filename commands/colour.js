const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;

exports.green = () => {
  if (bb8) {
    bb8.connect(() => {
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Command: green');
      bb8.color('green');
    });
  }
};

exports.blue = () => {
  if (bb8) {
    bb8.connect(() => {
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Command: blue');
      bb8.color('blue');
    });
  }
};

exports.fuchsia = () => {
  if (bb8) {
    bb8.connect(() => {
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Command: fuchsia');
      bb8.color('fuchsia');
    });
  }
};

exports.xmas = () => {
  if (bb8) {
    bb8.connect(() => {
      console.log('Connected to ' + config.BB8_LOCAL_NAME);
      console.log('Command: xmas');
      var count = 0;
      bb8.color('red');
      setInterval(() => {
        if (count === 0) {
          bb8.color('green');
          console.log('green');
          count = 1;
          return count;
        }
        if (count === 1) {
          bb8.color('red');
          console.log('red');
          count = 0;
          return count;
        }
      }, 1000);
    });
  }
};
