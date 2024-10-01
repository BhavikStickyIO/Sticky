import React from "react";
import {
  CustomCard,
  CardSectionHeader,
  InputField,
  DropDown,
  SwitchToggle,
} from "../../common";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FunnelInformation = () => {
  const theme = useTheme();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [age, setAge] = React.useState("");

  return (
    <>
      <CustomCard title="Funnel Information" subTitle="General Information">
        <InputField label="Name" />
        <InputField label="Description" rows={4} />
        <DropDown label="Default Channel" />
        <DropDown label="Expense Assumption Profile" />
        <InputField label="Daily Subscription Limit" />
        <DropDown label="Max Grace Period" />
        <Divider sx={{ margin: "20px" }} />
        <CardSectionHeader subTitle="Shopify Configuration" />
        <DropDown label="Sticky Checkout Domain" />
        <DropDown label="Traffic Source" />
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
        <DropDown label="Select Offer" />
      </CustomCard>
    </>
  );
};

export default FunnelInformation;
