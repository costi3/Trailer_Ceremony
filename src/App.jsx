import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DiagnosisProvider } from "./context/DiagnosisContext";

import TrailerPage from "./pages/TrailerPage";
import StartDiagnosisPage from "./pages/StartDiagnosisPage";
import CameraPage from "./pages/CameraPage";
import LoadingPage from "./pages/LoadingPage";
import ResultTier1Page from "./pages/ResultTier1Page";
import ResultTier2Page from "./pages/ResultTier2Page";
import ResultTier3Page from "./pages/ResultTier3Page";
import ResultUndiagnosedPage from "./pages/ResultUndiagnosedPage";

function App() {
  return (
    <DiagnosisProvider>
      <div className="app-root">
        <Routes>
          <Route path="/" element={<TrailerPage />} />
          <Route path="/start" element={<StartDiagnosisPage />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/loading" element={<LoadingPage />} />

          {/* 4 pagine risultato diverse */}
          <Route path="/result/tier1" element={<ResultTier1Page />} />
          <Route path="/result/tier2" element={<ResultTier2Page />} />
          <Route path="/result/tier3" element={<ResultTier3Page />} />
          <Route path="/result/undiagnosed" element={<ResultUndiagnosedPage />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </DiagnosisProvider>
  );
}

export default App;
