import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  function setIsLoadingForTrue() {
    setIsLoading(true)
  }

  function setIsLoadingForFalse() {
    setIsLoading(false)
  }

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoadingForTrue, setIsLoadingForFalse }}>
      {children}
    </GlobalContext.Provider>
  );
};
