import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";

const Undiagnosed = () => {
  const { photo, setPhoto, setTier } = useDiagnosis();
  const navigate = useNavigate();

  const handleRestart = () => {
    setPhoto(null);
    setTier(null);
    navigate("/");
  };

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