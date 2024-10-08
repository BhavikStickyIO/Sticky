import React from "react";
import CommonDataTable from "../../../common/CommonDataTable";
import { ShopifyRows } from "../../../constant/ShopifyTable";

const Shopify = () => {
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
    },
  ];

  return (
    <CommonDataTable
      title="Shopify Products"
      rows={ShopifyRows}
      columns={columns}
    />
  );
};

export default Shopify;
