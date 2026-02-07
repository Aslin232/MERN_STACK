import React from "react";
import '../stylings/Settings.css'
import '../stylings/Header.css'

const Themes = ({ theme, toggleTheme, onBack }) => {
  return (
    <div className="profile-page">
      <div className="prof-head">
        <div className="profile-header profile-headers">
          <button className="back-btn" onClick={onBack}>
            ←
          </button>
          <h2>Themes</h2>
        </div>

        <div className="profile-section">
          <div className="setting-row">
            <span className="tr">Dark Mode</span>

            <label className="switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
