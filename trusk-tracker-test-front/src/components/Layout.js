import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";

const Layout = ({ children }) => (
  <Block width={["100vw", "100vw", "80vw"]} margin="0 auto">
    {children}
  </Block>
);

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: undefined
};

export default Layout;
