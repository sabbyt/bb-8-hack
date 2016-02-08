# bb-8-hack

###no longer maintained - please visit [saphero](https://github.com/saphero/sphero-hack) for a client-side dashboard that easily connects and controls Sphero/BB-8/Ollie devices

####bb-8 setup
- Minimum requirement: Bluetooth Smart Low Energy/Bluetooth 4.0 (not backwards compatible)
- npm install
- node index.js setupBB8 (BB-8 setup from: [mintuz](https://github.com/mintuz/BB8-Commander))
- run the valid commands below

####sphero setup
- Minimum requirement: Bluetooth Classic (Bluetooth 2.0/3.0)
- pair sphero via bluetooth (found in system preferences - first ensure sphero is not connected to another device)
- npm install
- node sphero-index.js setupSphero
- commands are currently in development

###Commands available:
- help, setupBB8, setupSphero
- blue, flashingLights, fuchsia, green, keypress, look, moveRandom, ping, xmas

###Modules used:
- [home-config](https://github.com/nylen/home-config)
- [lodash](https://github.com/lodash/lodash)
- [noble](https://github.com/sandeepmistry/noble)
- [sphero](https://github.com/orbotix/sphero.js)
