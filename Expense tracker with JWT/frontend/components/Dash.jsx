import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import axios from "axios";
import API_BASE_URL from "../config";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dash = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    purpose: "",
    time: "",
  });
  const [entries, setEntries] = useState([]);

  const token = localStorage.getItem("token");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/chart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEntries(res.data);
      } catch (err) {
        console.log("Error loading data:", err);
      }
    };
    fetchData();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.purpose || !formData.time) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/chart`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries([...entries, res.data]);
      setFormData({ name: "", amount: "", purpose: "", time: "" });
    } catch (err) {
      alert("Failed to save data");
      console.log(err);
    }
  };

  const chartData = {
    labels: entries.map((entry) => entry.purpose),
    datasets: [
      {
        label: "Amount",
        data: entries.map((entry) => parseFloat(entry.amount)),
        backgroundColor: ["#3b82f6", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6"],
        borderColor: "#1f2937",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="title">Expense Tracker </h1>

      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Enter Amount" value={formData.amount} onChange={handleChange} />
        <input type="text" name="purpose" placeholder="Enter Purpose" value={formData.purpose} onChange={handleChange} />
        <input type="date" name="time" value={formData.time} onChange={handleChange} />
        <button type="submit">Add Data</button>
      </form>

      {entries.length > 0 ? (
        <div className="charts">
          <div className="chart-card"><h3>Bar Chart</h3><Bar data={chartData} /></div>
          <div className="chart-card"><h3>Pie Chart</h3><Pie data={chartData} /></div>
          <div className="chart-card"><h3>Line Chart</h3><Line data={chartData} /></div>
        </div>
      ) : (
        <p className="no-data">No data yet — add some entries above!</p>
      )}
    </div>
  );
};

export default Dash;