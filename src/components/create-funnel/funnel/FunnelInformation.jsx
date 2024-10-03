import React, { useState } from "react";

import {
  CustomCard,
  DropDown,
  CardSectionHeader,
  InputField,
  SwitchToggle,
} from "../../../common";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  GENERAL_INFORMATION,
  SHOPIFY_CONFIG,
  OFFER_CONFIG,
} from "../../../constant/funnel";
import { useFunnelContext } from "../../../context/FunnelContext";

const FunnelInformation = () => {
  const { handlePrimaryDropdown, dropdownValues } = useFunnelContext();
  const [copySuccess, setCopySuccess] = useState(false);
  const textToCopy = "Qnsdfjh623ZetUvwXYDfR45";
  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  console.log(dropdownValues, "dropdownValues");
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
        <DropDown
          name="expense_assumption_profile"
          options={GENERAL_INFORMATION.expense_assumption_profile}
          value={dropdownValues?.expense_assumption_profile}
          handleChange={handlePrimaryDropdown}
          label="Expense Assumption Profile"
        />
        <InputField label="Daily Subscription Limit" />
        <DropDown
          name="max_grace_period"
          label="Max Grace Period"
          options={GENERAL_INFORMATION.max_grace_period}
          value={dropdownValues?.max_grace_period}
          handleChange={handlePrimaryDropdown}
        />
        <Divider sx={{ margin: "20px" }} />
        <CardSectionHeader subTitle="Shopify Configuration" />
        <DropDown
          name="sticky_checkout_domain"
          options={SHOPIFY_CONFIG.sticky_checkout_domain}
          label="Sticky Checkout Domain"
          value={dropdownValues?.sticky_checkout_domain}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="traffic_source"
          label="Traffic Source"
          options={SHOPIFY_CONFIG.traffic_source}
          value={dropdownValues?.traffic_source}
          handleChange={handlePrimaryDropdown}
        />
        <InputField label="Shopify Store URL" />
        <InputField label="Store Name" />
        <InputField label="Shopify API Token" />

        <Divider sx={{ margin: "20px" }} />

        <CardSectionHeader subTitle="Shopify Configuration" />
        <DropDown
          name="sticky_checkout_domain"
          options={SHOPIFY_CONFIG.sticky_checkout_domain}
          label="Sticky Checkout Domain"
          value={dropdownValues?.sticky_checkout_domain}
          handleChange={handlePrimaryDropdown}
        />
        <DropDown
          name="traffic_source"
          label="Traffic Source"
          options={SHOPIFY_CONFIG.traffic_source}
          value={dropdownValues?.traffic_source}
          handleChange={handlePrimaryDropdown}
        />
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
            position: "relative", // Allow positioning of child elements
            backgroundColor: "#E3E7ED",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "8px",
            mt: 2,
            height: "70px",
          }}
        >
          <Typography sx={{ color: "#1B3E6F" }}>{textToCopy}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "rgb(0, 164, 224)",
              cursor: "pointer",
            }}
            onClick={handleCopy}
          >
            <ContentCopyIcon />
            <Typography sx={{ ml: 1 }}>Copy</Typography>
          </Box>

          {copySuccess && (
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#40B4E2",
                fontSize: "14px",
                position: "absolute",
                left: "40%",
                bottom: "10px",
                transition: "opacity 0.5s ease-in-out",
                opacity: copySuccess ? 1 : 0,
              }}
            >
              Copied successfully!
            </Typography>
          )}
        </Box>

        <Divider sx={{ margin: "20px" }} />

        <CardSectionHeader subTitle="Offer Configuration" />
        <DropDown
          name="select_offer"
          label="Select Offer"
          value={dropdownValues?.select_offer}
          options={OFFER_CONFIG.select_offer}
          handleChange={handlePrimaryDropdown}
        />
      </CustomCard>
    </>
  );
};

export default FunnelInformation;
