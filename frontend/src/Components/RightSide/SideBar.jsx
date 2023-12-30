import React from "react";

const SideBar = () => {
  return (
    <div id="sideBar">
      <a href="#" className="active">
        <span className="material-symbols-outlined">home</span> Home
      </a>
      <a href="#">
        <span className="material-symbols-outlined">local_fire_department</span> Explore
      </a>
      <a href="#">
        <span className="material-symbols-outlined">subscriptions</span> Subscriptions
      </a>
      <a href="#">
        <span className="material-symbols-outlined">bookmarks</span> Library
      </a>
      <a href="#">
        <span className="material-symbols-outlined">schedule</span> History
      </a>
      <a href="#">
        <span className="material-symbols-outlined">expand_circle_down</span> More
      </a>
    </div>
  );
};

export default SideBar;
