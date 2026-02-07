import React from "react";
import "../stylings/Settings.css";

const Settings = ({ onBack, onOpen, onLogout }) => {
  return (
    <div className="settings-page">
      <div className="settings-header">
        <button className="back-tn" onClick={onBack}>
          ←
        </button>
        <h2>Settings</h2>
      </div>
      <div className="nhu">
        <div className="settings-list">
          <div className="std" onClick={() => alert("Not available")}>
            <div className="left-st">
              <i className="fa-solid fa-user-astronaut"></i>
            </div>
            <div>
              {" "}
              <div className="setting-item">Personal Info</div>
            </div>
          </div>

          <div className="std" onClick={onOpen}>
            <div className="left-st">
              <i className="fa-regular fa-sun"></i>
            </div>
            <div className="setting-item">Themes</div>
          </div>
          <div className="std" onClick={() => alert("Not available")}>
            <div className="left-st">
              {" "}
              <i className="fa-regular fa-bell"></i>
            </div>
            <div>
              {" "}
              <div className="re">Notifications</div>
            </div>
          </div>
          <div className="std" onClick={() => alert("Not available")}>
            <div className="left-st">
              <i className="fa-solid fa-shield"></i>
            </div>
            <div>
              {" "}
              <div className="re">Privacy & security</div>
            </div>
          </div>
          <div className="std" onClick={()=>alert("not available")}>
            <div className="left-st dt">i</div>
            <div className="setting-item">About</div>
          </div>

          <div className="stds" onClick={onLogout}>
            <div className="left-st">
              {" "}
              <i className="fa-solid fa-power-off"></i>
            </div>
            <div className="logout-tn">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
