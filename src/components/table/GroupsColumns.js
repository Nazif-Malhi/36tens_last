import { Delete, Edit } from "./EditDelButtons";
import React from "react";
import CustomDataTable from "./DataTable";

const GroupColumns = ({ handleEdit, handleDelete, rows, pending }) => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      omit: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex" }}>
          <Edit onClickHandle={() => handleEdit(row.title, row.id)} />
          <Delete onClickHandle={() => handleDelete(row.id)} />
        </div>
      ),
      center: true,
      maxWidth: "200px",
    },
  ];
  return <CustomDataTable column={columns} row={rows} pending={pending} />;
};

export default GroupColumns;
