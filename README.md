# bb-8-hack

###in development
####bb-8 setup
- BB-8 setup from: [mintuz](https://github.com/mintuz/BB8-Commander)
- npm install
- node index.js setupBB8
- run the valid commands below

####sphero setup
- pair sphero via bluetooth (found in system preferences - first ensure sphero is not connected to another device)
- npm install
- node sphero-index.js setupSphero
- commands are currently in development

###Commands available:
- help, setupBB8, setupSphero
- blue, flashingLights, fuchsia, green, look, moveRandom, xmas

###Modules used:
- [home-config](https://github.com/nylen/home-config)
- [lodash](https://github.com/lodash/lodash)
- [noble](https://github.com/sandeepmistry/noble)
- [sphero](https://github.com/orbotix/sphero.js)
