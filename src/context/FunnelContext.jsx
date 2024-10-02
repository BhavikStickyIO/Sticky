import React, { createContext, useContext, useState } from "react";

const FunnelContext = createContext();
const FunnelCheckBoxContext = createContext();

export const useFunnelContext = () => {
  return useContext(FunnelContext, FunnelCheckBoxContext);
};

export const FunnelProvider = ({ children }) => {
  const [value, setValue] = useState({
    checkBoxFunnel: {
      payment_routing_include_tax: false,
      post_back_url: false,
      include_returns: false,
      coupons: false,
      third_party_providers: false,
      block_pre_paid_cards: false,
      bin_blocking: false,
      allow_custom_pricing: false,
      daily_subscription_limit: false,
      collections: false,
      others: false,
    },
    sliderFunnel: 0,
  });

  const [dropdownValues, setDropdownValues] = useState({
    default_channel: "",
    expense_assumption_profile: "",
    max_grace_period: "",
    shipping_methods: ""
  });

  console.log(dropdownValues, "dropdownValues");

  const handlePrimaryDropdown = (e) => {
    const { name, value } = e.target;
    setDropdownValues({ ...dropdownValues, [name]: value });
  };

  return (
    <FunnelContext.Provider
      value={{ value, setValue, handlePrimaryDropdown, dropdownValues }}
    >
      {children}
    </FunnelContext.Provider>
  );
};
