const R = require("ramda");

const { DRIVERS_IDS } = require("./constants");
const { parseXml, timeout } = require("./helpers");

let trackingState = {};

const routeEmitter = io => async (driverId, routeNodes, currentIndex) => {
  if (currentIndex === routeNodes.length) {
    await timeout(3000);

    // reverse route path and continue tracking
    await routeEmitter(io)(driverId, routeNodes, 0);
    return;
  }

  trackingState = Object.assign(trackingState, {
    [driverId]: {
      position: routeNodes[currentIndex].$,
      id: driverId
    }
  });

  io.emit("locationUpdated", trackingState);

  // Random a number in range 500 - 5000
  const sleepTime = Math.random() * (5000 - 500) + 500;

  // Dispatch time out to avoid stack overflow,
  // we use recursive calling to emit route forever
  await timeout(sleepTime);
  await routeEmitter(io)(driverId, routeNodes, currentIndex + 1);
};

const run = async io => {
  const emitRoute = routeEmitter(io);

  DRIVERS_IDS.forEach(async driverId => {
    const driver1TrackingData = R.path(
      ["gpx", "wpt"],
      await parseXml(`/data/gpx/${driverId}.gpx`)
    );
    emitRoute(driverId, driver1TrackingData, 0);
  });
};

module.exports = {
  run
};
