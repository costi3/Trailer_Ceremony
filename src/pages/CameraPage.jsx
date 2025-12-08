import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useDiagnosis } from "../components/DiagnosisContext";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CameraPage = () => {
  const { setPhoto, setTier } = useDiagnosis();
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (countdown <= 0) {
      handleCapture();
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  const handleCapture = () => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setPhoto(imageSrc);

      // random 1-4
      const randomTier = Math.floor(Math.random() * 4) + 1;
      setTier(randomTier);

      navigate("/loading");
    } else {
      setError("Errore durante la cattura dell'immagine.");
    }
  };

  const handleUserMediaError = () => {
    setError("Impossibile accedere alla fotocamera. Controlla i permessi.");
  };

  return (
    <div className="screen screen-dark">
      <div className="content">
        <h2 className="subtitle">Preparati…</h2>

        <div className="camera-wrapper">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            onUserMediaError={handleUserMediaError}
            className="camera-view"
          />
          <div className="countdown-overlay">
            {countdown > 0 ? countdown : "Scatto…"}
          </div>
        </div>

        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default CameraPage;
