import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";
import logo from "../assets/tier2.png"


const Tier2 = () => {
  const { photo, setPhoto, setTier } = useDiagnosis();
  const navigate = useNavigate();

  const goToTrailer = () => {
      setPhoto(null);
      setTier(null);
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
          <div className="result-card tier-2">   
            <div className="result-card-inner">
              <div className="result-photo-wrapper">
                <img src={photo} className="result-photo" />
              </div>
    
              <div className="result-text">
                <p className="tier2-lead">
                  Based on the data that we gathered online<br />
                  you belong to
                </p>
    
                <div style={{display: "flex",flexDirection: "column",alignItems: "center",alignSelf: "center",gap: "8px",}}>
                  <img src={logo}style={{width: "40%"}}/>
                  <h2 className="subtitle" style={{textAlign: "center",margin: 0}}>
                    TIER 2
                  </h2>
                </div>
                
                <ul className="result-list">
                  <li>Easily influenced</li>
                  <li>Addicted to data</li>
                  <li>Needs constant supervision</li>
                  <li>Emotionally unstable</li>
                  <li>Follows orders blindly</li>
                </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tier2;