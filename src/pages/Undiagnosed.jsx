import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";

const Undiagnosed = () => {
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
          <span style={{ fontSize: "20px", lineHeight: 1 }}>↻</span>
          <span style={{ fontSize: "20px", lineHeight: 1 }}>Take the Test again</span>
        </button>
      </div>
          <div className="result-card tier-4">   
            <div className="result-card-inner">
              <div className="result-photo-wrapper">
                <img src={photo} className="result-photo" />
              </div>
    
              <div className="result-text" style={{justifyContent:"space-around"}}>
                
    
                <div style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      justifyContent:"center",
                      gap: "8px",
                    }}
                  >
                    <p className="tier4-lead" style={{ margin: 0 }}>
                      Status:
                    </p>
                    <h2 className="subtitle" style={{ margin: 0 }}>
                      UNDIAGNOSED
                    </h2>
                  </div>


                <p className="tier4-lead"> Access to Tiered Zones and services is temporarily <strong>suspended</strong>.</p>
                <p className="tier4-lead"> Please <strong>report immediately</strong> to the department of Undiagnosed Citizens for further evaluation.</p>
                <p className="tier4-lead" style={{fontStyle: "italic", color: "red"}}> Resistance is punishable!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Undiagnosed;