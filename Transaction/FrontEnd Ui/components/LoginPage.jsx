import React, { useState } from "react";
import users from "../data/users";
import "../stylings/LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = () => {
    if (phone.length !== 10 || pin.length !== 4) {
      setError("Invalid number or pin");
      return;
    }
    const user = users.find((u) => u.phone === phone && u.pin === pin);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      onLogin();
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Payment Store</h2>
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        maxLength="10"
        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
      />

      <input
        type="password"
        placeholder="PIN"
        value={pin}
        maxLength="4"
        onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
      />
      {error && <p className="error">{error}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
