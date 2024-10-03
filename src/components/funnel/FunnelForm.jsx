import React, { useContext, useEffect, useRef } from "react";
import FunnelInformation from "./FunnelInformation";
import ShippingInformation from "../shipping/ShipingInformation";
import ThirdpartyInformation from "../thirdpartyprovider/ThirdpartyInformation";
import BinblockingInformation from "../binblocking/BinblockingInformation";
import PostbackProfileInformation from "../postbackprofile/PostbackProfileInformation";
import { useFunnelContext } from "../../context/FunnelContext";
import { Box, Button } from "@mui/material";
import PaymentInformation from "../payments/PaymentInformation";
import CouponInformation from "../coupon/CouponInformation"

export const FunnelForm = () => {
  const { value } = useFunnelContext();
  const shippingInfoRef = useRef();
  const paymentInfoRef = useRef();
  const thirdPartyProvider = useRef();

  useEffect(() => {
    if (value.sliderFunnel === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (value.sliderFunnel === 2) {
      const offset = 20;
      const top =
        shippingInfoRef?.current?.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else if (value.sliderFunnel === 1) {
      const offset = 20;
      const top =
        paymentInfoRef?.current?.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    else if (value.sliderFunnel === 3) {
      const offset = 20;
      const top =
        thirdPartyProvider?.current?.getBoundingClientRect().top +
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
      <div ref={thirdPartyProvider}>
        {value && value?.checkBoxFunnel?.third_Party_Providers && (
          <ThirdpartyInformation />
        )}
      </div>

      {value && value?.checkBoxFunnel?.bIN_Blocking && (
        <BinblockingInformation />
      )}
      <PostbackProfileInformation />
      <CouponInformation/>
      <Box display="flex" justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" color="error" sx={{ marginRight: 2 }}>
          Cancel
        </Button>
        <Button
          sx={{ width: '250px', height: '47px', borderRadius: '4px' ,backgroundColor:'#1B3E6F' }}
          variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
};
