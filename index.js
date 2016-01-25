var command = process.argv[2];
const flashingLightsCMD = require(__dirname + '/commands/lights');
const moveRandomCMD = require(__dirname + '/commands/move-random');
const colour = require(__dirname + '/commands/colour');
const cmdList = require(__dirname + '/lib/commands-list');

if (command.length < 2) {
  console.log('Please input a command for BB-8');
}

switch (command) {
  case 'help':
    console.log('Commands available: ' + Object.keys(cmdList).sort().join(', '));
    break;
  case 'flashingLights':
    flashingLightsCMD();
    break;
  case 'moveRandom':
    moveRandomCMD();
    break;
  case 'green':
    colour.green();
    break;
  case 'blue':
    colour.blue();
    break;
  case 'xmas':
    colour.xmas();
    break;
  case 'fuchsia':
    colour.fuchsia();
    break;
  default:
    try {
      console.log('Invalid command');
      console.log('Commands available: ' + Object.keys(cmdList).sort().join(', '));
    } catch (err) {
      console.log(err);
    }
}
