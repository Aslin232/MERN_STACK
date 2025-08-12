import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h2>Photo Gallery</h2>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      {menuOpen && (
        <nav className="menu">
          <Link to="/category/men">Men</Link>
          <Link to="/category/women">Women</Link>
          <Link to="/category/girl">Girl</Link>
          <Link to="/category/boy">Boy</Link>
          <Link to="/category/dog">Dog</Link>
          <Link to="/category/cat">Cat</Link>
        </nav>
      )}
    </header>
  );
}
