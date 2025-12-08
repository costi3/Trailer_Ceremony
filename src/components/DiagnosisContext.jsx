import React, { createContext, useContext, useState } from "react";

const DiagnosisContext = createContext(null);

export const DiagnosisProvider = ({ children }) => {
  const [photo, setPhoto] = useState(null);
  const [tier, setTier] = useState(null); // 1,2,3,4

  const value = { photo, setPhoto, tier, setTier };

  return (
    <DiagnosisContext.Provider value={value}>
      {children}
    </DiagnosisContext.Provider>
  );
};

export const useDiagnosis = () => {
  const ctx = useContext(DiagnosisContext);
  if (!ctx) {
    throw new Error("useDiagnosis must be used inside DiagnosisProvider");
  }
  return ctx;
};
