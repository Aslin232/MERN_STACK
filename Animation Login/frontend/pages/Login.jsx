import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PeopleAnimation from "../components/PeopleAnimation";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeInput, setActiveInput] = useState("email");
  const [emailStatus, setEmailStatus] = useState(null);
  const [passwordStatus, setPasswordStatus] = useState(null);

  const emailTimer = useRef();
  const passwordTimer = useRef();

  useEffect(() => {
    if (!email) return;
    clearTimeout(emailTimer.current);
    emailTimer.current = setTimeout(async () => {
      try {
        const res = await axios.post(
          "http://localhost:5001/api/auth/check-email",
          { email }
        );
        setEmailStatus(res.data.exists ? "valid" : "invalid");
      } catch {
        setEmailStatus("invalid");
      }
    }, 2000);
  }, [email]);

  useEffect(() => {
    if (!password || emailStatus !== "valid") return;
    clearTimeout(passwordTimer.current);
    passwordTimer.current = setTimeout(async () => {
      try {
        const res = await axios.post(
          "http://localhost:5001/api/auth/check-password",
          { email, password }
        );
        setPasswordStatus(res.data.valid ? "valid" : "invalid");
      } catch {
        setPasswordStatus("invalid");
      }
    }, 2000);
  }, [password, emailStatus, email]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <PeopleAnimation
        activeInput={activeInput}
        emailStatus={emailStatus}
        passwordStatus={passwordStatus}
      />
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onFocus={() => setActiveInput("email")}
          onChange={(e) => setEmail(e.target.value)}
          className={
            emailStatus === "valid"
              ? "valid"
              : emailStatus === "invalid"
              ? "invalid"
              : ""
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onFocus={() => setActiveInput("password")}
          onChange={(e) => setPassword(e.target.value)}
          className={
            passwordStatus === "valid"
              ? "valid"
              : passwordStatus === "invalid"
              ? "invalid"
              : ""
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
