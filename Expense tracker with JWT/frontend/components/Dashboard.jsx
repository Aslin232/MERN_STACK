import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";
import axios from "axios";
import Dash from "./Dash";

const Dashboard = () => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

   
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
    <div
      style={{
        
        height: "150px",
        display: "flex",
        gap:"1300px",
        alignItems: "center",
        justifyContent: "center",
        width:"1750px",
        
      }}
    >
      <h1 style={{ color: "#fff" }}>
        {user ? `Welcome, ${user.firstName}! ` : "Loading..."}
      </h1>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          background: "tomato",
          color: "purple",
          cursor: "pointer",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        Logout
      </button>
    </div>
    <Dash/>
    </>
  );
};

export default Dashboard;