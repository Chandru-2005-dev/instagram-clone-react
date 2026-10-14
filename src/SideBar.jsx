import React from "react";

function SideBar() {
  return (
    <div className="full-container m-3  ms-7">
    <div className="d-flex flex-column hover position-fixed gap-10">
      <div className="insta mt-5 heading">Instagram</div>
      <div className="insta mt-10"><i className="bi bi-house-door"></i>Home</div>
      <div className="insta"><i className="bi bi-camera-reels"></i>Reels</div>
      <div className="insta"><i className="bi bi-messenger"></i>Message</div>
      <div className="insta"><i className="bi bi-search"></i>Search</div>
      <div className="insta"><i className="bi bi-heart"></i>Notification</div>
      <div className="insta"><i className="bi bi-plus-square"></i>Create</div>
      <div className="insta"><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-5 hover">
        <div className="insta"><i className="bi bi-at"></i>Threads</div>
        <div className="insta mt-6"><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  );
}

export default SideBar;
