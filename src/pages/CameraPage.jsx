import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useDiagnosis } from "../components/DiagnosisContext";

const CameraPage = () => {
  const { setPhoto, setTier } = useDiagnosis();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(3);
  const [error, setError] = useState(null);

  // Avvia la camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720, facingMode: "user" },
          audio: false,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (err) {
        console.error(err);
        setError("Impossibile accedere alla fotocamera. Controlla i permessi.");
      }
    };

    startCamera();

    // stop della camera quando esci dalla pagina
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Countdown 3 → 0, poi scatta
  useEffect(() => {
    if (countdown <= 0) {
      handleCapture();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleCapture = () => {
  const video = videoRef.current;
  const canvas = canvasRef.current;

  if (!video || !canvas) return;

  const width = video.videoWidth || 1280;
  const height = video.videoHeight || 720;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  // flip orizzontale sul canvas
  ctx.translate(width, 0);
  ctx.scale(-1, 1);

  ctx.drawImage(video, 0, 0, width, height);

  // (opzionale) reset della trasformazione per sicurezza
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  const imageSrc = canvas.toDataURL("image/jpeg");

  if (imageSrc) {
    setPhoto(imageSrc);

    const randomTier = Math.floor(Math.random() * 4) + 1;
    setTier(randomTier);

    navigate("/loading");
  } else {
    setError("Errore durante la cattura dell'immagine.");
  }
};


  return (
    <div className="screen screen-dark">
      <div className="content">
        <h2 className="subtitle">Ready</h2>

        <div className="camera-wrapper">
          <video
            ref={videoRef}
            className="camera-view"
            autoPlay
            muted
            playsInline
          />
          <div className="countdown-overlay">
            {countdown > 0 ? countdown : "Scatto…"}
          </div>
        </div>

        {/* Canvas nascosto solo per fare lo snapshot */}
        <canvas ref={canvasRef} style={{ display: "none" }} />

        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default CameraPage;
