import React, { createContext, useState, useEffect } from 'react';
import { useFetch } from './../../hooks/useFetch';

export const ApiContext = createContext();

export const ApiProvider=({ children })=> {
  const { data, isLoading, isError } = useFetch('frota');


  const contextValue = {
    autos:data,
    isLoading: isLoading,
    isError: isError
  };

  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  );
}
