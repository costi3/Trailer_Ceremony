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
      <div className="result-card">
        <div className="result-card tier-4">
          {photo ? (
            <img src={photo} alt="snapshot" className="result-photo" />
          ) : (
            <div className="result-photo placeholder">Nessuna foto</div>
          )}
        </div>

        <div className="result-text">
          <h2 className="subtitle">UNDIAGNOSED</h2>
          <p className="description">
            Non siamo riusciti a classificarti in nessun Tier esistente.
          </p>
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
  );
};

export default Undiagnosed;