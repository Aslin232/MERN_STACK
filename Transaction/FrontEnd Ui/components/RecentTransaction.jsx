import { useState, useEffect } from "react";
import api from "../api/axios";
import "../stylings/recentTransactions.css";

const RecentTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await api.get(`recent-transactions/${user.phone}/`);

        setTransactions(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load recent Transaction");
      }
    };
    fetchTransactions();
  }, []);

  const visibleTransactions = showAll ? transactions : transactions.slice(0, 8);

  const handleClick = (tx) => {
    alert(`Sent ₹${tx.amount} to ${tx.name}`);
  };

  return (
    <div className="recent-transaction">
      <h2>People</h2>

      {error && <p className="error">{error}</p>}

      <div className="transaction-list">
        {visibleTransactions.map((tx, index) => (
          <div key={index} className="transaction-card">
            <img
              src={tx.image || "/default-user.png"}
              alt={tx.name}
              className="transaction-img"
              onClick={() => handleClick(tx)}
            />

            <p className="name" onClick={() => handleClick(tx)}>
              {tx.name}
            </p>
          </div>
        ))}
      </div>

      {transactions.length > 8 && (
        <button className="show-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      )}
    </div>
  );
};

export default RecentTransaction;
