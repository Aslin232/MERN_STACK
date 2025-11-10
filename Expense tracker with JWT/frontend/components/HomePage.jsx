import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const HomePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/register`, formData);
      alert("✅ Registration successful!");
      localStorage.setItem("token", res.data.token); 
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="header">
        <div className="left-head">
          <h2>Logo.</h2>
        </div>
        <div className="middle-head">
          <p className="p-u">Home</p>
          <p>Blog</p>
          <p>Services</p>
          <p>About</p>
        </div>
        <div className="right-head">
          <button className="btn" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button className="btn btn-click">Sign Up</button>
        </div>
      </div>

      <div className="content">
        <div className="form-dis">
          <h2>Sign UP</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="first-inp"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="second-inp"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="third-inp"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="fourth-inp"
              onChange={handleChange}
              required
            />
            <br />
            <button type="submit" className="reg-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;
