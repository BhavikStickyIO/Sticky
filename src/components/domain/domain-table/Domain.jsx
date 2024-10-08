import React from "react";
import CommonDataTable from "../../../common/CommonDataTable";
import { DomainRows } from "../../../constant/DomainTable";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const Domain = () => {

  const getStatusStyle = (activity) => {
    const isNotActive = activity.includes('Not Verified'); 
    return {
        color: isNotActive ? '#DF4602' : '#46A850',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: '600',
        textAlign: 'left',
    };
  };
  const columns = [
    { field: "domain", headerName: "Domain", width: 250 },
    { field: "funnel", headerName: "Funnel", width: 250 },
    { field: "lastUpdate", headerName: "Last Update", width: 250 },
    {
      field: "domainVerification",
      headerName: "Domain Verification",
      width: 250,
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
      headerName: "Edit",
      sortable: false,
      width: 100,
    },
  ];

  return (
    <CommonDataTable
      title="Domains"
      rows={DomainRows}
      columns={columns}
      customIcon={MoreHorizIcon}

    />
  );
};

export default Domain;
