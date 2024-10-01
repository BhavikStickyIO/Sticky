import React, { useEffect, useRef } from "react";
import FunnelInformation from "./FunnelInformation";
import { useFunnelContext } from "../../context/funnelContext";

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
      <div>
        <FunnelInformation />
      </div>
      <div ref={shippingInfoRef}>
        <FunnelInformation />
      </div>
    </>
  );
};

export default FunnelForm;
