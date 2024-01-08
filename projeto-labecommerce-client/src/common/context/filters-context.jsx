// Context.js
import React, { createContext, useState } from 'react';
import dataProducts from './../../data/dataProducts.json';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [products, setProducts] = useState([...dataProducts]);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(200);

  const handleMinPriceChange = (e) => {
    const minPrice = Number(e.target.value);
    setMinValue(minPrice);
    filterProducts(minPrice, maxValue);
  };

  const handleMaxPriceChange = (e) => {
    const maxPrice = Number(e.target.value);
    setMaxValue(maxPrice);
    filterProducts(minValue, maxPrice);
  };



  const contextValue = {
    products,
    setProducts,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    handleMinPriceChange,
    handleMaxPriceChange,
    filterProducts
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};