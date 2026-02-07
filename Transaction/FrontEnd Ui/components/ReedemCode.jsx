import React, { useState } from "react";
import axios from "axios";

const GoogleRedeem = ({ onBack }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  const redeem = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/google-redeem/", {
        phone: user.phone,
        code: code.trim(),
      });

      setMsg(`₹${res.data.amount} added successfully ✅`);
    } catch (err) {
      setMsg(err.response?.data?.error || "Redeem failed");
    }
  };

  return (
    <div className="card">
      <h2>Google Redeem Code</h2>

      <input
        placeholder="XXXX-XXXX-XXXX"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={redeem}>Redeem</button>
      <button onClick={onBack}>Back</button>

      {msg && <p>{msg}</p>}
    </div>
  );
};

export default GoogleRedeem;
