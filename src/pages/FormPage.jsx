import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myLogo from '../assets/logoMMH.png';

function LogoSmall(){
    return (
      <div className="logo" aria-hidden>
        <img src={myLogo} alt="Logo MMH" style={{ width: '130px', height: 'auto' }} />
      </div>
    );
}

export default function FormPage(){
  const nav = useNavigate();
  const [form, setForm] = useState({ name:"", age:"", city:"", accept:false });

  const handle = (k,v) => setForm(prev => ({...prev, [k]:v}));

  const goCamera = () => {
    if(!form.accept){
      alert("Please accept terms to continue");
      return;
    }
    nav("/camera", { state: { form }});
  };

  return (
    <div className="screen">
      <div className="card">
        <LogoSmall />
        <div className="subtitle" style={{marginBottom:12}}>Provide a few details before scanning</div>

        <div className="form-row">
          <input className="input" placeholder="Name" value={form.name} onChange={e=>handle("name", e.target.value)} />
          <input className="input" placeholder="Age" value={form.age} onChange={e=>handle("age", e.target.value)} />
          <input className="input" placeholder="City" value={form.city} onChange={e=>handle("city", e.target.value)} />
        </div>

        <label className="terms">
          <input type="checkbox" checked={form.accept} onChange={e=>handle("accept", e.target.checked)} />
          I accept Terms and Conditions
        </label>

        <div style={{marginTop:18}}>
          <button className="btn-primary" onClick={goCamera}>Get your Tier</button>
        </div>

      </div>
      <div  className="footer-small"  >Ministry of Mental Order</div>
    </div>
  );
}
