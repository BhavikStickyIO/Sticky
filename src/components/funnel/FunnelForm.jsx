import React, { useEffect, useRef } from "react";
import FunnelInformation from "./FunnelInformation";
import ShippingInformation from "../shipping/ShipingInformation";
import ThirdpartyInformation from "../thirdpartyprovider/ThirdpartyInformation";
import BinblockingInformation from "../binblocking/BinblockingInformation";
import PostbackProfileInformation from "../postbackprofile/PostbackProfileInformation";
import { useFunnelContext } from "../../context/funnelContext";
import PaymentInformation from "../payments/PaymentInformation";

const FunnelForm = () => {
  const { value } = useFunnelContext();
  const shippingInfoRef = useRef();

  useEffect(() => {
    if (value === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const offset = 20; // Change this value to adjust the space between the two forms
      const top =
        shippingInfoRef?.current?.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [value]);

  return (
    <>
      <FunnelInformation />
      <div ref={shippingInfoRef}>
        <PaymentInformation />
      </div>
      <ShippingInformation />
      <ThirdpartyInformation />
      <BinblockingInformation />
      {/* <PostbackProfileInformation/> */}
    </>
  );
};

export default FunnelForm;
