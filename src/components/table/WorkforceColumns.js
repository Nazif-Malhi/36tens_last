import { Delete, Edit } from "./EditDelButtons";

import React from "react";
import CustomDataTable from "./DataTable";

const WorkforceColumns = ({ handleEdit, handleDelete, rows }) => {
  console.log(rows);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      omit: true,
    },
    {
      name: "Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      center: true,
    },
    {
      name: "Phone",
      selector: (row) => row.contact_num,
      center: true,
    },
    {
      name: "Tag",
      selector: (row) => row.designation,
      center: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex" }}>
          <Edit onClickHandle={() => handleEdit(row.id)} />
          <Delete onClickHandle={() => handleDelete(row.id)} />
        </div>
      ),
      center: true,
    },
  ];
  return <CustomDataTable column={columns} row={rows} />;
};

export default WorkforceColumns;
