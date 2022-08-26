import React, { createContext, useState } from "react";

export const LanguageContext = createContext({
  language: "pt",
  setLanguage: () => {},
});

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  return (
    <LanguageContext.Provider
      value={{ language: language, setLanguage: setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
