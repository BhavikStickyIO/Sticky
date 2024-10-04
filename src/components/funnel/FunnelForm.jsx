import React, { useContext, useEffect, useRef } from "react";
import FunnelInformation from "./FunnelInformation";
import ShippingInformation from "../shipping/ShipingInformation";
import ThirdpartyInformation from "../thirdpartyprovider/ThirdpartyInformation";
import BinblockingInformation from "../binblocking/BinblockingInformation";
import PostbackProfileInformation from "../postbackprofile/PostbackProfileInformation";
import { useFunnelContext } from "../../context/FunnelContext";
import { Box, Button } from "@mui/material";
import PaymentInformation from "../payments/PaymentInformation";
import CouponInformation from "../coupon/CouponInformation";
import IncludeReturnInformation from "../includeReturn/IncludeReturnInformation";

export const FunnelForm = () => {
  const { value, setValue } = useFunnelContext();
  console.log("value", value);
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
    } else if (value.sliderFunnel === 3) {
      const offset = 20;
      const top =
        thirdPartyProvider?.current?.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [value.sliderFunnel]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const offset = window.scrollY;
      console.log("offset", offset);
      setValue((prev) => ({
        ...prev,
        sliderFunnel: 0,
      }));
      // Example: Add/Remove a class when scrolled past a point
      if (offset > 1500 && offset < 1900) {
        setValue((prev) => ({
          ...prev,
          sliderFunnel: 1,
        }));
      } else if (offset > 1900 && offset < 2200) {
        setValue((prev) => ({
          ...prev,
          sliderFunnel: 2,
        }));
      } else if (offset >= 2300) {
        setValue((prev) => ({
          ...prev,
          sliderFunnel: 3,
        }));
      }
    });
  }, [window.scrollY]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3.7 }}
      className="funnelForm"
    >
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

      {value && value?.checkBoxFunnel?.include_returns && (
        <IncludeReturnInformation />
      )}
      {value && value?.checkBoxFunnel?.coupons && <CouponInformation />}

      <Box display="flex" justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" color="error" sx={{ marginRight: 2 }}>
          Cancel
        </Button>
        <Button
          sx={{
            width: "250px",
            height: "47px",
            borderRadius: "4px",
            backgroundColor: "#1B3E6F",
          }}
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
