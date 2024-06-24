import React, { createContext, useState, useEffect } from "react";
import { useFetch } from "./../../hooks/useFetch";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const contextValue = {};
  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
