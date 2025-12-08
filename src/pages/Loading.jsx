import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Loading() {
  const loc = useLocation();
  const nav = useNavigate();
  const photo = loc.state?.photo;
  const form = loc.state?.form;

  useEffect(() => {
    const pages = ["/tier1", "/tier2", "/tier3", "/undiagnosed"];

    const pick = pages[Math.floor(Math.random() * pages.length)];

    const timer = setTimeout(() => {
      nav(pick, { state: { photo, form }});
    }, 2400);

    return () => clearTimeout(timer);
  }, [nav, photo, form]);

  return (
    <div className="screen">
      <div>
        <div className="loader" />
        <div className="subtitle" style={{ marginTop: 8, fontSize: 14, textAlign: "center" }}>
          Scanning the web
        </div>
        <div className="subtitle" style={{ marginTop: 8, fontSize: 14, textAlign: "center" }}>
          for your <strong>Digital Footprint</strong>
        </div>
      </div>

      <div className="footer-small">Ministry of Mental Order</div>
    </div>
  );
}
