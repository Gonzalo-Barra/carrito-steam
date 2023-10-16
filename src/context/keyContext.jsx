// keyContext.jsx
import React, { createContext, useState, useContext } from "react";

export const KeyContext = createContext();

export const KeyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <KeyContext.Provider value={{ count, setCount }}>{children}</KeyContext.Provider>
  );
};

export const useKeyContext = () => useContext(KeyContext);