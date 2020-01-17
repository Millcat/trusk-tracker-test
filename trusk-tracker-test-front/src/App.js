import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

import Tracker from "./Tracker";

import Layout from "./components/Layout";

const engine = new Styletron();

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Layout>
          <Tracker />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
