import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";

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
      <div className="content result-layout">
        <div className="result-photo-wrapper">
          {photo ? (
            <img src={photo} alt="snapshot" className="result-photo" />
          ) : (
            <div className="result-photo placeholder">Nessuna foto</div>
          )}
        </div>

        <div className="result-info tier-1">
          <h2 className="subtitle">TIER 1</h2>
          <p className="description">
            Descrizione del profilo TIER 1
          </p>
          <ul>
            <li>Maximum efficiency</li>
            <li>Obsessed with power</li>
            <li>Zero empathy</li>
            <li>Takes extreme risks</li>
            <li>PRuthless decision-making</li>
          </ul>

          <button className="primary-btn" onClick={handleRestart}>
            Rifai la diagnosi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tier1;


