import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { rows } from "../../../constant/dataTable";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  { field: "productId", headerName: "Product ID", width: 130 },
  { field: "variantId", headerName: "Variant ID", width: 130 },
  { field: "offerId", headerName: "Offer ID", width: 100 },
  { field: "crmProduct", headerName: "CRM Product", width: 130 },
  { field: "frequencyType", headerName: "Frequency Type", width: 130 },
  { field: "frequency", headerName: "Frequency", width: 130 },
  { field: "quantity", headerName: "Quantity", width: 100 },
  { field: "msrp", headerName: "MSRP", width: 100 },
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
        Shopify Products
      </Typography>
      <Paper sx={{ height: 550, width: "100%", padding: 2 }}>
        <DataGrid
          rows={rows}
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
