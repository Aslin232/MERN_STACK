import React from "react";
import "../stylings/Profile.css";

const Profile = ({ onBack, onOpenSettings, ght }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-page">
      <div className="blued">
        <div className="profile-header">
          <button className="back-bn" onClick={onBack}>
            ←
          </button>
          <h2>Profile</h2>
        </div>

        <div className="profile-card">
          <div className="lo">
            <div className="profile-left">
              <h2 className="pty">{user.name}</h2>
              <p className="hy">{user.phone}</p>
              <p className="hy">{user.name}@oksbi</p>
            </div>
            <div className="profile-right">
              <img src={user.dp} alt="profile" />
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section sets">
        <div className="whited">
          <div className="sbs" onClick={ght}>
            <div className="stv">
              <div className="left-sbs">
                <img src="/images/sbs.png" alt="" className="img-sbt" />
              </div>
              <div className="right-sb">
                <h2>State Bank of India 80973</h2>
                <p>Savings Accounts</p>
                <p>primary</p>
              </div>
            </div>
          </div>
          <div className="sbbs" onClick={ght}>
            <span>Add Another Bank Account</span>
            <span className="gth"> ←</span>
          </div>
          <div className="bds">
            <div className="bg" onClick={ght}>
              <div className="left-bds">
                <img src="/images/rew.png" alt="" className="rws" />
              </div>
              <div className="right-bds">
                <h3>$10</h3>
                <p>Rewards earned!</p>
              </div>
            </div>
            <div className="kj" onClick={ght}>
              <div className="plus">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="plus-r">
                <p>
                  Invite <br />
                  Friends
                </p>
              </div>
            </div>
          </div>

          <div className="sbbbs" onClick={ght}>
            <div className="sbsr">
              {" "}
              <span className="sbt">
                <i class="fa-solid fa-question black"></i>
              </span>
              <span>Help & FeedBack</span>
            </div>
          </div>
          <div className="settings-btns" onClick={onOpenSettings}>
            {" "}
            <img src="/images/sets.png" alt="" className="eds" />
            <button className="settings-btn">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
