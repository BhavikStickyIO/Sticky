import React from "react";
import AmericanExpress from "../../assets/image.png";
import Visa from "../../assets/visa.png";
import { CustomCard, SecondaryDropdown } from "../../common";

const paymentOptions = [
  {
    label: "Payment Type",
    options: [
      { label: "Visa", value: "Visa", icon: Visa },
      {
        label: "American Express",
        value: "American Express",
        icon: AmericanExpress,
      },
    ],
  },
  {
    label: "Payment Routing Configuration",
    options: [{ label: "Add Payment Routing", value: "Add Payment Routing" }],
  },
  {
    label: "Returns Profile",
    options: [
      { label: "Return Profile Example", value: "Return Profile Example" },
    ],
  },
  {
    label: "Coupons",
    options: [{ label: "Coupon Example", value: "Coupon Example" }],
  },
  {
    label: "Countries",
    options: [
      { label: "India", value: "India" },
      { label: "Canada", value: "Canada" },
      { label: "USA", value: "USA" },
    ],
  },
];
{
  /* <DropDown
name="default_channel"
handleChange={handlePrimaryDropdown}
value={dropdownValues?.default_channel}
label="Default Channel"
options={GENERAL_INFORMATION.default_channel}
/> */
}
const PaymentInformation = () => {
  return (
    <div>
      <CustomCard title="Payments">
        {paymentOptions.map((allData) => (
          <SecondaryDropdown
            name
            key={allData.label}
            label={allData.label}
            options={allData.options}
            isMulti={true}
            isPayment={true}
          />
        ))}
        {/* <SecondaryDropdown
          name="payment_type"
          key={allData.label}
          label="payment_type"
          options={PAYMENT_INFORMATION.payment_type}
          isMulti={true}
          isPayment={true}
        /> */}
      </CustomCard>
    </div>
  );
};

export default PaymentInformation;
