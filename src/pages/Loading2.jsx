import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";
import loadingVideo from "../assets/loading.mp4";

const Loading = () => {
  const { tier } = useDiagnosis();
  const navigate = useNavigate();

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
    <div className="loading-container">
      {/* Video in Background */}
      <video
        className="video-background"
        src={loadingVideo}
        autoPlay
        muted 
        playsInline 
        onEnded={goToResult}
      />
    </div>
  );
};

export default Loading;