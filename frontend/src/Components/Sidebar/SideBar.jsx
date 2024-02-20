import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../Utils/sideBarSlice";

const SideBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const { isOpen } = useSelector((store) => store.sideBar);

  useEffect(() => {
    setIsOpenMenu(isOpen);
  }, [isOpen]);

  return (
    <div id="sideBar" className={isOpenMenu ? "sideBar" : "sideBarClose"}>
      <a href="#" className="active">
        <span className="ri-home-5-line"></span> Home
      </a>
      <a href="#">
        <span className="ri-fire-line"></span> Explore
      </a>
      <a href="#">
        <span class="ri-vidicon-line"></span> Subscriptions
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
      <p>Explore</p>
      <a href="#">
        <span class="material-symbols-outlined">local_mall</span> Shopping
      </a>
      <a href="#">
        <span class="ri-music-2-line"></span> Music
      </a>
    </div>
  );
};

export default SideBar;
