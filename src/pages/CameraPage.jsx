import { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { useNavigate, useLocation } from "react-router-dom";

export default function CameraPage(){
  const webcamRef = useRef(null);
  const nav = useNavigate();
  const location = useLocation();
  const form = location.state?.form || null;

  const videoConstraints = {
    facingMode: "user"
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // navigate to loading, pass photo + form
    nav("/loading", { state: { photo: imageSrc, form } });
  }, [nav, form]);

  return (
    <div className="screen">
      <div className="card">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{textAlign:"left"}}>
            <div className="title">Reveal your potential</div>
          </div>
        </div>

        <div className="webcam-area" aria-hidden>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            mirrored={false}
            videoConstraints={videoConstraints}
            style={{ width:"100%", height:"100%", objectFit:"cover" }}
          />
          <div className="face-oval" />
        </div>

        <div className="subtitle" style={{marginTop:0}}>Place your face inside the oval shape</div>

        <div style={{textAlign:"center"}}>
          <div className="capture-btn" onClick={capture} title="Scatta" />
        </div>

      </div>

      <div  className="footer-small"  >Ministry of Mental Order</div>

    </div>
  );
}
