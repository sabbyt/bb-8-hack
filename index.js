var command = process.argv[2];
const flashingLightsCMD = require(__dirname + '/commands/lights');
const moveRandomCMD = require(__dirname + '/commands/move-random');
const lookCMD = require(__dirname + '/commands/look');
const colour = require(__dirname + '/commands/colour');
const cmdList = require(__dirname + '/lib/commands-list');
const setupBB8 = require(__dirname + '/commands/setup-bb8');
const setupSphero = require(__dirname + '/commands/setup-sphero');
const ping = require(__dirname + '/commands/ping');
const keypress = require(__dirname + '/commands/keypress');

if (command.length < 2) {
  console.log('Please input a valid command');
}

switch (command) {
  case 'help':
    console.log('Commands available: ' + Object.keys(cmdList).sort().join(', '));
    break;
  case 'setupBB8':
    setupBB8();
    break;
  case 'setupSphero':
    setupSphero();
    break;
  case 'flashingLights':
    flashingLightsCMD();
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
  case 'look':
    lookCMD();
    break;
  case 'moveRandom':
    moveRandomCMD();
    break;
  case 'ping':
    ping();
    break;
  case 'keypress':
    keypress();
    break;
  default:
    try {
      console.log('Invalid command');
      console.log('Commands available: ' + Object.keys(cmdList).sort().join(', '));
    } catch (err) {
      console.log(err);
    }
}
