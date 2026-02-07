import React, { useState } from "react";
import { createTransaction } from "../api/transaction";

const SendMoney = ({ onBack }) => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSend = async () => {
    setError("");

    if (!pin) return setError("PIN required");
    if (pin !== user.pin) return setError("Incorrect PIN");

    if (!phone || !amount) return setError("All fields required");

    try {
      const res = await createTransaction({
        sender_phone: user.phone,
        receiver_phone: phone,
        amount: Number(amount),
      });

      if (res.error) return setError(res.error);

      user.balance -= Number(amount);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Money sent successfully");
      onBack();
    } catch (err) {
      console.log("AXIOS ERROR FULL:", err);

      if (err.response) {
        setError(err.response.data?.error || "Request failed");
      } else {
        setError("Network error");
      }
    }
  };

  return (
    <div>
      <input
        placeholder="Receiver phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />

      {error && <p>{error}</p>}
      <button onClick={handleSend}>Send</button>

      <button onClick={onBack}>back</button>
    </div>
  );
};

export default SendMoney;
