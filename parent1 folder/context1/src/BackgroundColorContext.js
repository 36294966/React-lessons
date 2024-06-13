import React, { createContext, useContext, useState } from "react";

const BackgroundColorContext = createContext();

export const useBackgroundColor = () => useContext(BackgroundColorContext);

export const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  return (
    <BackgroundColorContext.Provider
      value={{ backgroundColor, setBackgroundColor }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};









