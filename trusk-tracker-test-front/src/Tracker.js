import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Heading, HeadingLevel } from "baseui/heading";

import DriversTable from "./components/DriversTable";

const SOCKET_API_URL = "http://localhost:3099";

const parseDriverLocationToTableData = driversLocations =>
  Object.entries(driversLocations).map(
    ([key, { id, position: { lat, lon } } = { position: {} }]) => [id, lat, lon]
  );

const Tracker = () => {
  const [driversLocations, setDriversLocations] = useState({});

  useEffect(() => {
    const socket = io(SOCKET_API_URL);
    socket.on("locationUpdated", data => {
      setDriversLocations(data);
    });

    return socket.close;
  }, []);

  return (
    <>
      <HeadingLevel>
        <Heading styleLevel={5}>Drivers :</Heading>
      </HeadingLevel>
      <DriversTable data={parseDriverLocationToTableData(driversLocations)} />
    </>
  );
};

export default Tracker;
