import React from "react";
import PropTypes from "prop-types";
import { Table } from "baseui/table";

const COLUMNS = ["#ID", "Latitude", "Longitude"];

const DriversTable = ({ data }) => <Table columns={COLUMNS} data={data} />;

DriversTable.propTypes = {
  data: PropTypes.array
};

DriversTable.defaultProps = {
  data: undefined
};

export default DriversTable;
