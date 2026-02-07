import React, { useEffect, useState } from "react";
import "../stylings/transaction.css";
import api from "../api/axios";

const Transaction = ({ onBack }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        const res = await api.get(`recent-transactions/${user.phone}/`);

        setTransactions(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <div className="transactions">
        <h2>Transaction History</h2>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && transactions.length === 0 && (
          <p>No transactions yet</p>
        )}

        {!loading &&
          !error &&
          transactions.map((tx) => (
            <div key={tx.id} className="tx-card">
              <p>
                <strong>To:</strong> {tx.name}
              </p>
              <p>
                <strong>Amount:</strong> ₹{tx.amount}
              </p>
              <p className="date">{new Date(tx.date).toLocaleString()}</p>
            </div>
          ))}
      </div>

      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Transaction;
