import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [carrinho, setCarrinho] = useState([])

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading, carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};