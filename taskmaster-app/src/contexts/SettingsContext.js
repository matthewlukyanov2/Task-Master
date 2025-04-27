import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const SettingsContext = createContext();

// Provider component
export const SettingsProvider = ({ children }) => {
  const [yellowMode, setYellowMode] = useState(() => {
    const saved = localStorage.getItem("yellowMode");
    return saved === "true";
  });
  const [fontStyle, setFontStyle] = useState(() => {
    return localStorage.getItem("fontStyle") || "Calibri";
  });

  useEffect(() => {
    localStorage.setItem("yellowMode", yellowMode);
    localStorage.setItem("fontStyle", fontStyle);
  }, [yellowMode, fontStyle]);

  return (
    <SettingsContext.Provider value={{ yellowMode, setYellowMode, fontStyle, setFontStyle }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to access context
export const useSettings = () => useContext(SettingsContext);
