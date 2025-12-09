import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";
import logo from "../assets/tier1.png";


const Tier1 = () => {
  const { photo, setPhoto, setTier } = useDiagnosis();
  const navigate = useNavigate();

  const handleRestart = () => {
    setPhoto(null);
    setTier(null);
    navigate("/");
  };

  return (
     <div className="screen screen-dark">
          <div className="result-card tier-1">   
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
