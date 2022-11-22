import React from "react";
import DataTable from "react-data-table-component";
import CircularProgress from "@mui/material/CircularProgress";

const CustomDataTable = ({ column, row, pending }) => {
  return (
    <DataTable
      columns={column}
      data={row}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="400px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      progressPending={pending}
      progressComponent={<CircularProgress color="secondary" />}
    />
  );
};

export default CustomDataTable;
