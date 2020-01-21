import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { compose, withProps } from "recompose";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

const SOCKET_API_URL = "http://localhost:3099";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 10.793055455687, lng: 106.67909768578 }}
  >
    {props.driversLocations.map(driver => {
      const lat = parseFloat(driver.position.lat);
      const lon = parseFloat(driver.position.lon);

      return (
        <Marker
          key={driver.id}
          position={{ lat: lat, lng: lon }}
          onClick={() => props.onMarkerClick(driver)}
        />
      );
    })}
  </GoogleMap>
));

export default function Map() {
  const [driversLocations, setDriversLocations] = useState({});

  useEffect(() => {
    const socket = io(SOCKET_API_URL);
    socket.on("locationUpdated", data => {
      setDriversLocations(data);
    });

    return socket.close;
  }, []);

  function handleMarkerClick(driver) {
    console.log("clicked marker", driver);
  }

  return (
    <MyMapComponent
      driversLocations={Object.values(driversLocations)}
      onMarkerClick={driver => handleMarkerClick(driver)}
    />
  );
}
