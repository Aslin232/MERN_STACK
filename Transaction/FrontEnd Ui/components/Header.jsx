import React from "react";

import "../stylings/Header.css";

const Header = ({ onLogout, onProfile }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="header">
      <h2>Payment Store</h2>

      <div className="profile-sectio">
        <img
          src={user.dp}
          alt="profile"
          className="avatar"
          onClick={onProfile}
        />
      </div>
    </header>
  );
};

export default Header;
