import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const CommonDataTable = ({ title, rows, columns, customIcon: CustomIcon }) => {
  const paginationModel = { page: 0, pageSize: 10 };

  const handleEdit = (row) => {
    console.log("Edit row:", row);
  };

  const enhancedColumns = columns.map((col) =>
    col.field === "edit"
      ? {
          ...col,
          renderCell: (params) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleEdit(params.row)}
            >
              {CustomIcon ? (
                <CustomIcon color="primary" />
              ) : (
                <EditIcon color="primary" />
              )}
            </div>
          ),
        }
      : col
  );

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          color: "#1B3E6F",
          fontFamily: "Roboto",
          lineHeight: "41px",
          textAlign: "left",
        }}
      >
        {title}
      </Typography>
      <Paper sx={{ height: 550, width: "100%", padding: 2 }}>
        <DataGrid
          rows={rows}
          columns={enhancedColumns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 20]}
          disableColumnMenu
        />
      </Paper>
    </div>
  );
};

export default CommonDataTable;
