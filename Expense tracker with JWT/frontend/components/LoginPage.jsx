import React, { useState } from "react";
import "./sign.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard"); 
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="header">
        <div className="left-head"><h2>Logo.</h2></div>
        <div className="middle-head">
          <p className="p-u">Home</p>
          <p>Blog</p>
          <p>Services</p>
          <p>About</p>
        </div>
        <div className="right-head">
          <button className="btn btn-click" >Sign In</button>
          <button className="btn" onClick={() => navigate("/")}>Sign Up</button>
        </div>
      </div>

      <div className="content">
        <div className="form-dis">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" className="third-inp" onChange={handleChange} required /><br />
            <input type="password" name="password" placeholder="Password" className="fourth-inp" onChange={handleChange} required /><br />
            <button type="submit" className="log-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;