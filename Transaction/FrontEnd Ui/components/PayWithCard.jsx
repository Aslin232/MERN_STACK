import React, { useState } from "react";

const PayWithCard = ({ onBack }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    card_number: "",
    expiry: "",
    cvv: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = async () => {
    const res = await fetch("http://localhost:8000/api/pay-with-card/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: user.phone,
        ...form,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(`₹${data.amount} added successfully`);
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="card-pay">
      <h2>Pay with Card</h2>

      <input
        name="card_number"
        placeholder="Card Number"
        onChange={handleChange}
      />

      <input name="expiry" placeholder="MM/YY" onChange={handleChange} />

      <input
        name="cvv"
        placeholder="CVV"
        type="password"
        onChange={handleChange}
      />

      <input name="amount" placeholder="Amount" onChange={handleChange} />

      <button onClick={handlePay}>Pay</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default PayWithCard;
