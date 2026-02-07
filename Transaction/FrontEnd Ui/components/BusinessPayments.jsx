import React from "react";
import { useState } from "react";
import { businessPayments } from "../data/businessPayments";
import "../stylings/recentTransactions.css";

const BusinessPayments = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePayments = showAll
    ? businessPayments
    : businessPayments.slice(0, 7);
  return (
    <div className="recent-transaction">
      <h2>Business</h2>
      <div className="transaction-list lse">
        {visiblePayments.map((item) => (
          <div key={item.id} className="transaction-card crd" onClick={()=>alert("not available")}>
            <img src={item.img} alt={item.name} className="transaction-imgs" />
            <p className="name">{item.name}</p>
          </div>
        ))}
      </div>
      {businessPayments.length > 7 && (
        <button className="show-more s-m" onClick={() => setShowAll(!showAll)}>
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

export default BusinessPayments;
