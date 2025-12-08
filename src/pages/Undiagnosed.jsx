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
      <div className="content result-layout">
        <div className="result-photo-wrapper">
          {photo ? (
            <img src={photo} alt="snapshot" className="result-photo" />
          ) : (
            <div className="result-photo placeholder">Nessuna foto</div>
          )}
        </div>

        <div className="result-info tier-4">
          <h2 className="subtitle">UNDIAGNOSED</h2>
          <p className="description">
            Non siamo riusciti a classificarti in nessun Tier esistente.
          </p>
          <ul>
            <li>Hard to manipulate</li>
            <li>No desire for status</li>
            <li>Refuses to stay connected</li>
            <li>Hides personal data</li>
            <li>Too independent</li>
          </ul>

          <button className="primary-btn" onClick={handleRestart}>
            Rifai la diagnosi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Undiagnosed;