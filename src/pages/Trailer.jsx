import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import trailerVideo from "../assets/trailer.mp4";

const Trailer = () => {
  const navigate = useNavigate();

  const goToCamera = () => {
    navigate("/loading"); // cambia qui se la route è diversa
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Spacebar (nuovi browser: "Space", vecchi: key === " ")
      if (event.code === "Space" || event.key === " ") {
        event.preventDefault(); // evita play/pausa del video
        goToCamera();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="screen screen-dark">
      <video
        className="video-background"
        src={trailerVideo}
        autoPlay
        loop        // ripete all'infinito
        controls       // per evitare blocco autoplay nei browser
      />
    </div>
  );
};

export default Trailer;
