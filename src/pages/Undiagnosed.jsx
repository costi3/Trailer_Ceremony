import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";

const Undiagnosed = () => {
  const { photo, setPhoto, setTier } = useDiagnosis();
  const navigate = useNavigate();

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
          <div className="result-card tier-4">   
            <div className="result-card-inner">
              <div className="result-photo-wrapper">
                <img src={photo} className="result-photo" />
              </div>
    
              <div className="result-text">
                <p className="tier4-lead">
                  Based on the data that we gathered online<br />
                  you belong to
                </p>
    
                <div style={{display: "flex",flexDirection: "column",alignItems: "center",alignSelf: "center",gap: "8px",}}>
                  <h2 className="subtitle" style={{textAlign: "center",margin: 0}}>
                    UNDIAGNOSED
                  </h2>
                </div>
                
                <ul className="result-list">
                  <li>Hard to manipulate</li>
                  <li>No desire for status</li>
                  <li>Refuses to stay connected</li>
                  <li>Hides personal data</li>
                  <li>Too independent</li>
                </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Undiagnosed;