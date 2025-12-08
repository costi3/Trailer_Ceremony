import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";
import loadingVideo from "../assets/loading.mp4";

const LoadingPage = () => {
  const { tier } = useDiagnosis();
  const navigate = useNavigate();

  // se ricarichi la pagina senza tier, torna all'inizio
  useEffect(() => {
    if (!tier) navigate("/");
  }, [tier, navigate]);

  const goToResult = () => {
    if (tier === 1) navigate("/result/tier1");
    else if (tier === 2) navigate("/result/tier2");
    else if (tier === 3) navigate("/result/tier3");
    else navigate("/result/undiagnosed");
  };

  return (
    <div className="screen screen-dark">
      <div className="content">
        <h2 className="subtitle">Analizzando i dati...</h2>

        <video
          className="video-player"
          src={loadingVideo}
          autoPlay
          onEnded={goToResult}
        />

        <button className="secondary-btn" onClick={goToResult}>
          Salta loading
        </button>
      </div>
    </div>
  );
};

export default LoadingPage;
