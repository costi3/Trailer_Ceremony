import React from "react";
import { useNavigate } from "react-router-dom";
import trailerVideo from "../assets/trailer.mp4";

const Trailer = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/start");
  };

  return (
    <div className="screen screen-dark">
      <div className="content">
        <video
          className="video-player"
          src={trailerVideo}
          autoPlay
          controls
          onEnded={handleContinue}
        />
      </div>
    </div>
  );
};

export default Trailer;
