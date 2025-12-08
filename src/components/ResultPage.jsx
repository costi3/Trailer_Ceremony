import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage({ borderColor, tierLabel, titleColor, list, logo }) {
  const loc = useLocation();
  const navigate = useNavigate();

  const photo = loc.state?.photo;
  const form = loc.state?.form;

  return (
    <div className="screen">
      <div className="card" style={{ textAlign: "left", position: "relative" }}>

        <button
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "transparent",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            lineHeight: 1,
            zIndex: 10,
            color: titleColor,
          }}
          aria-label="close"
        >
          ×
        </button>

        <div className="result-box" style={{ borderColor }}>
          {photo && (
            <img src={photo} alt="user" className="photo-box" />
          )}
        </div>

        <div className="result-text">
          {form?.name && (
            <div
              className="subtitle"
              style={{
                fontWeight: "700",
                fontSize: 17,
                textTransform: "uppercase",
                marginBottom: "6px"
              }}
            >
              {form.name}
            </div>
          )}

          <p>
            Based on the data that we gathered <br /> you belong to
          </p>

          <div style={{ textAlign: "center", marginTop: 8 }}>
            {logo && (
              <img
                src={logo}
                alt="tier logo"
                style={{
                  width: "100px",       
                  height: "auto",
                  marginBottom: "6px"
                }}
              />
            )}

            <h2 style={{ color: titleColor, margin: 0 }}>{tierLabel}</h2>
          </div>

          <ul className="list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-small">Ministry of Mental Order</div>
    </div>
  );
}
