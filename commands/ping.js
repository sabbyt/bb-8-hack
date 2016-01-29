const bb8 = require(__dirname + '/../lib/uuid-config')();
const config = require(__dirname + '/../lib/uuid-config').uuid;

module.exports = exports = () => {
  bb8.connect(() => {
  // options for streaming data
    var opts = {
      n: 200,
      m: 1,
      mask1: 0x00000000,
      pcnt: 0,
      mask2: 0x0D800000
    };

    bb8.setDataStreaming(opts);

    bb8.on("dataStreaming", function(data) {
      console.log("streaming data packet recieved");
      console.log("  data:", data);
    });

    bb8.roll(150, 0);
  });

    // bb8.getBluetoothInfo(function(err, data) {
    //   if (err) {
    //     console.log("error: ", err);
    //   } else {
    //     console.log(data);
    //     console.log("ASCII name:", data.name);
    //     console.log("bluetooth address:", data.btAddress);
    //     console.log("separator:", data.separator);
    //     console.log("colors:", data.colors);
    //   }
    // });
    //
    // bb8.getPowerState(function(err, data) {
    //   if (err) {
    //     console.log("error: ", err);
    //   } else {
    //     console.log(data);
    //     console.log("  recVer:", data.recVer);
    //     console.log("  batteryState:", data.batteryState);
    //     console.log("  batteryVoltage:", data.batteryVoltage);
    //     console.log("  chargeCount:", data.chargeCount);
    //     console.log("  secondsSinceCharge:", data.secondsSinceCharge);
    //   }
    // });
  // });
};
