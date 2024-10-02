import React, { useContext, useEffect, useRef } from "react";
import FunnelInformation from "./FunnelInformation";
import ShippingInformation from "../shipping/ShipingInformation";
import ThirdpartyInformation from "../thirdpartyprovider/ThirdpartyInformation";
import BinblockingInformation from "../binblocking/BinblockingInformation";
import PostbackProfileInformation from "../postbackprofile/PostbackProfileInformation";
import { useFunnelContext } from "../../context/FunnelContext";
import { Box, Button } from "@mui/material";
import PaymentInformation from "../payments/PaymentInformation";

export const FunnelForm = () => {
  const { value } = useFunnelContext();
  const shippingInfoRef = useRef();
  const paymentInfoRef = useRef();

  useEffect(() => {
    if (value.sliderFunnel === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if(value.sliderFunnel === 2) {
      const offset = 20; // Change this value to adjust the space between the two forms
      const top =
        shippingInfoRef?.current?.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else if(value.sliderFunnel === 1) {
      const offset = 20; // Change this value to adjust the space between the two forms
      const top =
      paymentInfoRef?.current?.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [value.sliderFunnel]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3.7 }}>
      <FunnelInformation />
      <div ref={paymentInfoRef}>
        <PaymentInformation />
      </div>
      <div ref={shippingInfoRef}>
        <ShippingInformation />
      </div>
      {value && value?.checkBoxFunnel?.third_party_providers && (
        <ThirdpartyInformation />
      )}
      {value && value?.checkBoxFunnel?.bin_blocking && (
        <BinblockingInformation />
      )}
      <PostbackProfileInformation />
      <Button>Save</Button>
    </Box>
  );
};
