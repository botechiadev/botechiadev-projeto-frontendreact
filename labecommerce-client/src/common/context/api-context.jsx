import { createContext, useState } from 'react';
import dataProducts from './../../data/dataProducts.json';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState(dataProducts);

  const [cart, setCart] = useState([]);

  const contextValue = {
    products,
    setProducts,
    cart,
    setCart,
  };
  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
