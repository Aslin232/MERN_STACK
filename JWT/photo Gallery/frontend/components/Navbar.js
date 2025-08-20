import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ background: "#222", color: "#fff", padding: "10px" }}>
      <span style={{ marginRight: "10px" }}>Photo Gallery</span>
      {user ? (
        <>
          <span>Welcome,{user.username}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Login Please</span>
      )}
    </nav>
  );
}

export default Navbar;
