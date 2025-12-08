import React from "react";
import { useNavigate } from "react-router-dom";

const StartDiagnosisPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/camera");
  };

  return (
    <div className="screen screen-dark">
      <div className="content">
        <h2 className="subtitle">WE KNOW WHO YOU ARE.</h2>
        <p className="description">
          Premi il pulsante qui sotto per iniziare la tua diagnosi.
        </p>

        <button className="primary-btn large" onClick={handleStart}>
          Get your Diagnosis
        </button>
      </div>
    </div>
  );
};

export default StartDiagnosisPage;
