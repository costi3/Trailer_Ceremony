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
              {photo ? (
                <img src={photo} alt="snapshot" className="result-photo" />
              ) : (
                <div className="result-photo placeholder">Nessuna foto</div>
              )}
            </div>

            <div className="result-text">
              <h2 className="subtitle">TIER 1</h2>
              <p className="description">
                Based on the data that we gathered online <br /> you belong to:
              </p>
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

      <img src={logo} alt="logo tier 1" className="logo-bottom-right" />
    </div>
  );
};

export default Tier1;
