import React from "react";

function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-logo">Instagram</div>

      <div className="sidebar-menu">
        <div className="sidebar-item">
          <i className="bi bi-house-door"></i>
          <span>Home</span>
        </div>

        <div className="sidebar-item">
          <i className="bi bi-camera-reels"></i>
          <span>Reels</span>
        </div>

        <div className="sidebar-item">
          <i className="bi bi-messenger"></i>
          <span>Message</span>
        </div>

        <div className="sidebar-item">
          <i className="bi bi-search"></i>
          <span>Search</span>
        </div>

        <div className="sidebar-item">
          <i className="bi bi-heart"></i>
          <span>Notification</span>
        </div>

        <div className="sidebar-item">
          <i className="bi bi-plus-square"></i>
          <span>Create</span>
        </div>

        <div className="sidebar-item">
          <i className="bi bi-person-circle"></i>
          <span>Profile</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-item">
          <i className="bi bi-at"></i>
          <span>Threads</span>
        </div>

        <div className="sidebar-item">
          <i className="bi bi-list"></i>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
