import React, { createContext, useContext, useState } from 'react';

const FunnelContext = createContext();
const FunnelCheckBoxContext = createContext();

export const useFunnelContext = () => {
  return useContext(FunnelContext, FunnelCheckBoxContext);
};

export const FunnelProvider = ({ children }) => {
  const [value, setValue] = useState({
    checkBoxFunnel: {
      payment_Routing_Include_Tax: false,
      post_Back_URL: false,
      include_Returns: false,
      coupons: false,
      third_Party_Providers: false,
      block_Pre_Paid_Cards: false,
      bIN_Blocking: false,
      allow_Custom_Pricing: false,
      daily_Subscription_Limit: false,
      collections: false,
      others: false,
    },
    sliderFunnel: 0
  });

  return (
    <FunnelContext.Provider value={{ value, setValue }}>
      {children}
    </FunnelContext.Provider>
  );
};
