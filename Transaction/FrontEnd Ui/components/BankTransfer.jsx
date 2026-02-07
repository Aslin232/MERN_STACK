import React, { useState } from "react";
import api from "../api/axios";

const BankTransfer = ({ onBack }) => {
  const [receiverAccount, setReceiverAccount] = useState("");
  const [receiverIFSC, setReceiverIFSC] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleTransfer = async () => {
    // ✅ VALIDATION
    if (!receiverAccount || !receiverIFSC || !amount || !pin) {
      setError("All fields are required");
      return;
    }

    if (pin.length !== 4) {
      setError("PIN must be 4 digits");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await api.post("/bank-transfer/", {
        sender_phone: user.phone,
        receiver_account: receiverAccount,
        receiver_ifsc: receiverIFSC,
        amount: Number(amount),
        pin: pin, // ✅ SEND PIN
      });

      setSuccess(res.data?.message || "Transfer successful ✅");

      // reset fields
      setReceiverAccount("");
      setReceiverIFSC("");
      setAmount("");
      setPin("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Transfer failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bank-transfer">
      <h2>Bank Transfer</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <input
        type="text"
        placeholder="Receiver Account Number"
        value={receiverAccount}
        onChange={(e) => setReceiverAccount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Receiver IFSC Code"
        value={receiverIFSC}
        onChange={(e) => setReceiverIFSC(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter 4-digit PIN"
        value={pin}
        maxLength={4}
        onChange={(e) => setPin(e.target.value)}
      />

      <button onClick={handleTransfer} disabled={loading}>
        {loading ? "Processing..." : "Send Money"}
      </button>

      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default BankTransfer;
