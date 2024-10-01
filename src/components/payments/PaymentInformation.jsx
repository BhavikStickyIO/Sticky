import React from "react";
import { CustomCard, SecondaryDropdown } from "../../common";

const PaymentInformation = () => {
  return (
    <div>
      <CustomCard title="Payments">
        <SecondaryDropdown label="Payment Type" />
        <SecondaryDropdown label="Payment Routing Configuration" />
        <SecondaryDropdown label="Returns Profile" />
        <SecondaryDropdown label="Coupons" />
        <SecondaryDropdown label="Countries" />
      </CustomCard>
    </div>
  );
};

export default PaymentInformation;
