import React from "react";
import { CustomCard, DropDown } from "../../common";

const shippingOptions = [
  { value: "free", label: "Free Delivery" },
  { value: "express", label: "Express Delivery" },
  { value: "standard", label: "Standard Delivery" },
];

const ShippingInformation = () => {
  return (
    <CustomCard title="Shipping">
      <DropDown label="Shipping Methods" options={shippingOptions}  />
    </CustomCard>
  );
};

export default ShippingInformation;
