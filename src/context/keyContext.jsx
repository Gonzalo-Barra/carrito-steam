import React, { createContext, useState, useContext } from 'react';

const KeyContext = createContext();

export const useKeyContext = () => useContext(KeyContext);

export const KeyProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
  
};

return (
    <KeyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </KeyContext.Provider>
  );
};

export default KeyContext;