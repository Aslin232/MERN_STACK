import React, { useState } from "react";
import api from "../api/axios";

const operators = [
  { name: "Jio", plans: [199, 299, 399] },
  { name: "Airtel", plans: [179, 279, 399] },
  { name: "VI", plans: [149, 249, 349] },
];

const MobileRecharge = ({onBack}) => {
  const [mobile, setMobile] = useState("");
  const [operator, setOperator] = useState("");
  const [plans, setPlans] = useState([]);
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  // dummy logged-in user phone
  const userPhone = "8438725637";

  const handleOperatorChange = (op) => {
    setOperator(op.name);
    setPlans(op.plans);
    setAmount("");
  };

  const handleRecharge = async () => {
    if (!mobile || !operator || !amount || !pin) {
      alert("All fields required");
      return;
    }

    try {
      const res = await api.post("/mobile-recharge/", {
        phone: userPhone,
        mobile,
        operator,
        amount,
        pin,
      });

      setMessage(res.data.message);
      setPin("");
    } catch (err) {
      alert(err.response?.data?.error || "Recharge failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2>📱 Mobile Recharge</h2>

      <input
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={styles.input}
      />

      <h4>Select Operator</h4>
      <div style={styles.row}>
        {operators.map((op) => (
          <button
            key={op.name}
            style={styles.btn}
            onClick={() => handleOperatorChange(op)}
          >
            {op.name}
          </button>
        ))}
      </div>

      {plans.length > 0 && (
        <>
          <h4>Select Plan</h4>
          <div style={styles.row}>
            {plans.map((p) => (
              <button
                key={p}
                style={styles.planBtn}
                onClick={() => setAmount(p)}
              >
                ₹{p}
              </button>
            ))}
          </div>
        </>
      )}

      {amount && (
        <>
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={styles.input}
          />

          <button style={styles.rechargeBtn} onClick={handleRecharge}>
            Recharge ₹{amount}
          </button>
        </>
      )}

      {message && <p style={{ color: "green" }}>{message}</p>}

      <button onClick={onBack}>back</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "10px",
  },
  btn: {
    padding: "8px 15px",
    cursor: "pointer",
  },
  planBtn: {
    padding: "8px 15px",
    background: "#e0e0e0",
    border: "none",
    cursor: "pointer",
  },
  rechargeBtn: {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default MobileRecharge;
