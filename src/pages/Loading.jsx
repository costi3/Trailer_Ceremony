import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../components/DiagnosisContext";
import loadingVideo from "../assets/loading.mp4";

const Loading = () => {
  const { setPhoto, setTier, tier } = useDiagnosis();

  const videoRef = useRef(null);   // webcam
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5);
  const [error, setError] = useState(null);
  const [hasCaptured, setHasCaptured] = useState(false);

  // Avvia la CAMERA
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

  // Countdown 3 → 0, poi scatta UNA volta
  useEffect(() => {
    if (hasCaptured) return;

    if (countdown <= 0) {
      handleCapture();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, hasCaptured]);

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

    // reset trasformazione
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    const imageSrc = canvas.toDataURL("image/jpeg");

    if (imageSrc) {
      setPhoto(imageSrc);

      const randomTier = Math.floor(Math.random() * 4) + 1;
      setTier(randomTier);

      setHasCaptured(true);

      // dopo lo scatto possiamo fermare la camera
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    } else {
      setError("Errore durante la cattura dell'immagine.");
    }
  };

  // Quando il video di loading finisce → vai al risultato
  const goToResult = () => {
    // in teoria tier è già settata da handleCapture,
    // ma mettiamo un fallback per sicurezza
    let t = tier;
    if (!t) {
      t = Math.floor(Math.random() * 4) + 1;
      setTier(t);
    }

    if (t === 1) navigate("/result/tier1");
    else if (t === 2) navigate("/result/tier2");
    else if (t === 3) navigate("/result/tier3");
    else navigate("/result/undiagnosed");
  };

  return (
    <div className="loading-container">
      {/* Video di loading in background */}
      <video
        className="video-background"
        src={loadingVideo}
        autoPlay
        muted
        playsInline
        onEnded={goToResult}
      />

      {/* Overlay centrale con la camera */}
      <div className="content-overlay">
        <div className="camera-wrapper">
          <video
            ref={videoRef}
            className="camera-view"
            autoPlay
            muted
            playsInline
          />
          <div className="countdown-overlay">
            {countdown > 0 ? countdown : ""}
          </div>
        </div>

        {/* Canvas nascosto solo per lo snapshot */}
        <canvas ref={canvasRef} style={{ display: "none" }} />

        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default Loading;
