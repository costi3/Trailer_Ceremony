import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";
import logo from "../assets/tier1.png";

const Tier1 = () => {
  const { photo, setPhoto, setTier } = useDiagnosis();
  const navigate = useNavigate();

  const goToTrailer = () => {
    setPhoto(null);
    setTier(null);
    navigate("/"); 
  };

  const goToLoading = () => {
    setPhoto(null);
    setTier(null);
    navigate("/loading"); 
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key ? event.key.toLowerCase() : "";

      const isEscape = key === "escape";
      const isR = key === "r";
      const isCmdR = isR && event.metaKey;  // command+R 
      const isCtrlR = isR && event.ctrlKey; // Ctrl + R 

      if (isEscape || isCmdR || isCtrlR) {
        if (isCmdR || isCtrlR) {
          event.preventDefault(); // blocca il reload del browser
        }
        goToTrailer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToTrailer]);

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
          <span style={{ fontSize: "20px", lineHeight: 1 }}>↻</span>
          <span style={{ fontSize: "20px", lineHeight: 1 }}>Take the Test again</span>
        </button>
      </div>

      <div className="result-card tier-1">
        <div className="result-card-inner">
          <div className="result-photo-wrapper">
            {photo ? (
              <img src={photo} alt="snapshot" className="result-photo" />
            ) : (
              <div className="result-photo placeholder">Nessuna foto</div>
            )}
          </div>

          <div className="result-text">
            <p className="tier3-lead">
              Based on the data that we gathered online
              <br />
              you belong to
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "center",
                gap: "8px",
              }}
            >
              <img
                src={logo}
                alt="tier 1 icon"
                style={{ width: "40%" }}
              />
              <h2
                className="subtitle"
                style={{ textAlign: "center", margin: 0 }}
              >
                TIER 1
              </h2>
            </div>

            <ul className="result-list">
              <li>Maximum efficiency</li>
              <li>Obsessed with power</li>
              <li>Zero empathy</li>
              <li>Takes extreme risks</li>
              <li>Ruthless decision-making</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tier1;
