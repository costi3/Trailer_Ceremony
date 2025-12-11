import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";
import logo from "../assets/tier3.png";

const Tier3 = () => {
  const { photo, setPhoto, setTier } = useDiagnosis();
  const navigate = useNavigate();
  const goToLoading = () => {
    setPhoto(null);
    setTier(null);
    navigate("/loading"); 
  };

  const goToTrailer = () => {
      navigate("/"); // Trailer
    };
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        const key = event.key ? event.key.toLowerCase() : "";
  
        const isEscape = key === "escape";
        const isR = key === "r";
        const isCmdR = isR && event.metaKey;  // ⌘ + R (Mac)
        const isCtrlR = isR && event.ctrlKey; // Ctrl + R (Win)
  
        if (isEscape || isCmdR || isCtrlR) {
          if (isCmdR || isCtrlR) {
            event.preventDefault(); // prova a bloccare reload del browser
          }
          goToTrailer();
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToTrailer, navigate, setPhoto, setTier]);

  return (
    <div className="screen screen-dark">
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto 16px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={goToLoading}
          onFocus={(e) => e.currentTarget.blur()} 
          style={{
          position: "fixed",
          top: "24px",
          right: "32px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          border: "none",
          borderRadius: "999px",
          padding: "8px 16px",
          color: "#7f7f7f",
          fontFamily: "Gotham, system-ui, sans-serif",
          fontSize: "14px",
          cursor: "pointer",
          zIndex: 10,
          outline: "none",
          boxShadow: "none",
        }}
        >
          <span style={{ fontSize: "18px", lineHeight: 1 }}>↻</span>
          {/*<span>Take the Test again</span>*/}
        </button>
      </div>

      <div className="result-card tier-3">   
        <div className="result-card-inner">
          <div className="result-photo-wrapper">
            <img src={photo} className="result-photo" />
          </div>

          <div className="result-text">
            <p className="tier3-lead">
              Based on the data that we gathered online<br />
              you belong to
            </p>

            <div style={{display: "flex",flexDirection: "column",alignItems: "center",alignSelf: "center",gap: "8px",}}>
              <img src={logo}style={{width: "40%"}}/>
              <h2 className="subtitle" style={{textAlign: "center",margin: 0}}>
                TIER 3
              </h2>
            </div>
            
            <ul className="result-list">
              <li>Low performance</li>
              <li>Unreliable output</li>
              <li>Slow to adapt</li>
              <li>Often disconnected</li>
              <li>Limited utility</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tier3;
