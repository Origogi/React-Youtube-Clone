import { Home, HomeOutlined, Menu } from "@mui/icons-material";
import React from "react";
import "./SideNav.css";
import SideNavItem from "./SideNavItem";

function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav_header">
        <Menu />
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <SideNavItem title="홈" image={<HomeOutlined />} />
    </div>
  );
}

export default SideNav;
