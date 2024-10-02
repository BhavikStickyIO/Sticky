import React from "react";
import {
  CustomCard,
  CardSectionHeader,
  InputField,
  DropDown,
  SwitchToggle,
} from "../../common";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { GENERAL_INFORMATION } from "../../constant/funnel";
import { useFunnelContext } from "../../context/FunnelContext";

const FunnelInformation = () => {
  const { handlePrimaryDropdown, dropdownValues } = useFunnelContext();
  console.log(dropdownValues, 'dropdownValues')
  return (
    <>
      <CustomCard title="Funnel Information" subTitle="General Information">
        <InputField label="Name" />
        <InputField label="Description" rows={4} />
        <DropDown
          name="default_channel"
          handleChange={handlePrimaryDropdown}
          value={dropdownValues?.default_channel}
          label="Default Channel"
          options={GENERAL_INFORMATION.default_channel}
        />
        <DropDown name="expense_assumption_profile" label="Expense Assumption Profile" />
        <InputField label="Daily Subscription Limit" />
        <DropDown name="" label="Max Grace Period" />
        <Divider sx={{ margin: "20px" }} />
        <CardSectionHeader subTitle="Shopify Configuration" />
        <DropDown name="" label="Sticky Checkout Domain" />
        <DropDown name="" label="Traffic Source" />
        <InputField label="Shopify Store URL" />
        <InputField label="Store Name" />
        <InputField label="Shopify API Token" />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Typography sx={{ color: "#1B3E6F", m: 1, fontSize: "14px" }}>
            Sync Shopify Products
          </Typography>
          <SwitchToggle />
        </Box>
        <Typography sx={{ color: "#1B3E6F", mr: 13, fontSize: "14px", mt: 5 }}>
          Please add the following code to your Shopify footer.liquid file.
        </Typography>

        <Box
          sx={{
            backgroundColor: "#E3E7ED",
            display: "flex",
            justifyContent: "space-around",
            height: "80px",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography sx={{ color: "#1B3E6F" }}>
            Qnsdfjh623ZetUvwXYDfR45
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "rgb(0, 164, 224)",
              cursor: "pointer",
            }}
          >
            <ContentCopyIcon />
            <Typography>Copy</Typography>
          </Box>
        </Box>
        <Divider sx={{ margin: "20px" }} />
        <CardSectionHeader subTitle="Offer Configuration" />
        <DropDown name="" label="Select Offer" />
      </CustomCard>
    </>
  );
};

export default FunnelInformation;
