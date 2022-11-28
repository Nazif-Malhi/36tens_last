import { Delete, Edit } from "./EditDelButtons";
import React from "react";
import CustomDataTable from "./DataTable";

const CompetencyStatmentsColumns = ({
  handleEdit,
  handleDelete,
  rows,
  pending,
}) => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      omit: true,
    },
    {
      name: "Title",
      selector: (row) => row.competency_title,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Statements",
      selector: (row) => row.statement,
      sortable: true,
      maxWidth: "300px",

    },
    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex" }}>
          <Edit
            onClickHandle={() =>
              handleEdit(
                row.competency_title,
                row.id,
                row.type,
                row.defination,
                row.statement
              )
            }
          />
          <Delete onClickHandle={() => handleDelete(row.id)} />
        </div>
      ),
      center: true,
      maxWidth: "200px",
    },
  ];
  return <CustomDataTable column={columns} row={rows} pending={pending} />;
};

export default CompetencyStatmentsColumns;
