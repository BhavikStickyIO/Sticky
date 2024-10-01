import React, { createContext, useContext, useState } from 'react';

const FunnelContext = createContext();

export const useFunnelContext = () => {
  return useContext(FunnelContext);
};

export const FunnelProvider = ({ children }) => {
  const [value, setValue] = useState(0);


  return (
    <FunnelContext.Provider value={{ value, setValue }}>
      {children}
    </FunnelContext.Provider>
  );
};
