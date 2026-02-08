import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import "./index.scss";
import { useState } from "react";


import UserAvatar from "../UserAvatar";




const User = () => {
  return (
    <div className="home-page">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-container">
        <div className="topbar">
          <Topbar />
        </div>

        <div className="mainBody user-page">

          <div className="user-card">

            <UserAvatar />

            <h2 className="user-name" style={{ color: "black" }}> Fit-Bucket User 1 </h2>

             <div className="user-info-grid">
              <div className="info-box"><h3>Alter</h3><p>-</p></div>
              <div className="info-box"><h3>Gewicht</h3><p>-</p></div>
              <div className="info-box"><h3>Größe</h3><p>-</p></div>
              <div className="info-box"><h3>Ziel</h3><p>-</p></div>
              <div className="info-box"><h3>Trainingslevel</h3><p>1</p></div>
              <div className="info-box"><h3>Letztes Training</h3><p>-</p></div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default User;
