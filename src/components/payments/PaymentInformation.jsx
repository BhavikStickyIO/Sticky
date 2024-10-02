import React from "react";
import { CustomCard, SecondaryDropdown } from "../../common";

const paymentOptions = [
  {
    label: "Payment Type",
    options: [
      { label: "Visa", value: "Visa" },
      { label: "American Express", value: "American Express" },
    ],
  },
  {
    label: "Payment Routing Configuration",
    options: [
      { label: "Add Payment Routing", value: "Add Payment Routing" },
    ],
  },
  {
    label: "Returns Profile",
    options: [
      { label: "Return Profile Example", value: "Return Profile Example" },
    ],
  },
  {
    label: "Coupons",
    options: [
      { label: "Coupon Example", value: "Coupon Example" },
    ],
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

const PaymentInformation = () => {
  return (
    <div>
      <CustomCard title="Payments">
        {paymentOptions.map((allData) => (
          <SecondaryDropdown
            key={allData.label}
            label={allData.label}
            options={allData.options} // Pass payment options here
            isMulti={true}
            isPayment={true} // Flag for payment dropdown
          />
        ))}
      </CustomCard>
    </div>
  );
};

export default PaymentInformation;
