import { Home, Menu } from "@mui/icons-material";
import React from "react";
import "./SideNav.css";

function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav_heaer">
          <Menu />
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <Home />
    </div>
  );
}

export default SideNav;
