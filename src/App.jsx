import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DiagnosisProvider } from "./components/DiagnosisContext";

import Trailer from "./pages/Trailer";
import StartDiagnosis from "./pages/StartDiagnosis";
import CameraPage from "./pages/CameraPage";
import Loading from "./pages/Loading";
import Tier1 from "./pages/Tier1";
import Tier2 from "./pages/Tier2";
import Tier3 from "./pages/Tier3";
import Undiagnosed from "./pages/Undiagnosed";


function App() {
  return (
    <DiagnosisProvider>
      <div className="app-root">
        <Routes>
          <Route path="/" element={<Trailer />} />
          <Route path="/start" element={<StartDiagnosis />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/loading" element={<Loading />} />

          <Route path="/result/tier1" element={<Tier1 />} />
          <Route path="/result/tier2" element={<Tier2 />} />
          <Route path="/result/tier3" element={<Tier3 />} />
          <Route path="/result/undiagnosed" element={<Undiagnosed />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </DiagnosisProvider>
  );
}

export default App;
