import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { DomainRows } from "../../../constant/DomainTable";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  { field: "api", headerName: "API", width: 200  },
  { field: "apikey", headerName: "API Key", width: 200 },
  { field: "password", headerName: "Password", width: 200},
  { field: "created_At", headerName: "Created at", width: 200 },
  { field: "updated_At", headerName: "Updated at", width: 200 },
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <EditIcon
        color="primary"
        onClick={() => handleEdit(params.row)}
        style={{ cursor: "pointer" }}
      />
    ),
  },
];

const handleEdit = (row) => {
  console.log("Edit row:", row);
};

const DataTable = () => {
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          color: "#1B3E6F",
          fontFamily: "Roboto",
          fontSize: "35px",
          fontWeight: 400,
          lineHeight: "41.02px",
          textAlign: "left",
        }}
      >
        Domains 
      </Typography>
      <Paper sx={{ height: 550, width: "100%", padding: 0 }}>
        <DataGrid
          rows={DomainRows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 20]}
          disableColumnMenu
        />
      </Paper>
    </div>
  );
};

export default DataTable;
