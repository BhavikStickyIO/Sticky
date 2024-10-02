import React from "react";
import { CustomCard, DropDown } from "../../common";
import { SHIPPING_INFORMATION } from "../../constant/funnel";
import { useFunnelContext } from "../../context/FunnelContext";

const ShippingInformation = () => {
  const { handlePrimaryDropdown, dropdownValues } = useFunnelContext();
  return (
    <CustomCard title="Shipping">
      <DropDown
      isChipShow={true}
        label="Shipping Methods"
        handleChange={handlePrimaryDropdown}
        value={dropdownValues.shipping_methods}
        name="shipping_methods"
        options={SHIPPING_INFORMATION.shipping_methods}
      />
    </CustomCard>
  );
};

export default ShippingInformation;
