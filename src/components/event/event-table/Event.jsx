import React from "react";
import CommonDataTable from "../../../common/CommonDataTable";
import { EventRows } from "../../../constant/EventTable";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AdUnitsIcon from '@mui/icons-material/AdUnits';



const Event = () => {
    const getStatusStyle = (activity) => {
        const isNotActive = activity.includes('Not Active'); 
        return {
            color: isNotActive ? '#DF4602' : '#46A850',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'left',
        };
      };
  const columns = [
    { field: "name", headerName: "Name", width: 170 },
    { field: "trigger", headerName: "Trigger", width: 170 },
    {
        field: "type",
        headerName: "Type",
        width: 170,
        renderCell: () => {
          return (
            <div style={{alignItems: 'center',color:'#40B4E2  ' }}>
              <AdUnitsIcon />
            </div>
          );
        },
      },
    { field: "lastUpdate", headerName: "Last Update", width: 170 },
    { field: "funnal", headerName: "Funnel", width: 170 },
    {
        field: "activity",
        headerName: "Activity",
        width: 170,
        renderCell: (params) => {
          const style = getStatusStyle(params.value); 
          return (
            <div style={style}>
              {params.value}
            </div>
          );
        },
      },   
       {
      field: "edit",
      headerName: "Actions",
      sortable: false,
      width: 100,
    },
  ];

  return (
    <CommonDataTable
      title="Events"
      rows={EventRows}
      columns={columns}
      customIcon={MoreHorizIcon}
    />
  );
};

export default Event;
