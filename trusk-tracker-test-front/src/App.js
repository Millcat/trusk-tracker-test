import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import { Button } from "baseui/button";

import Map from "./components/Map";
import Tracker from "./Tracker";

import Layout from "./components/Layout";

const engine = new Styletron();

const THEME = {
  light: "light",
  dark: "dark"
};

const App = () => {
  const [theme, setTheme] = React.useState(THEME.light);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <Button
          onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          }
        >
          Light/Dark Theme
        </Button>
        <Layout>
          <Tracker />
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
