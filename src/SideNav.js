import {
  ExploreOutlined,
  Home,
  HomeOutlined,
  Menu,
  PlayCircleOutline,
  SubscriptionsOutlined,
  YouTube,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
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
      <SideNavItem title="탐색" image={<ExploreOutlined />} />
      <SideNavItem title="구독" image={<SubscriptionsOutlined />} />
      <SideNavItem title="Originals" image={<YouTube />} />
      <SideNavItem title="Youtube Music" image={<PlayCircleOutline />} />

      <div className="sideNav_divider">
        <Divider />
      </div>
    </div>
  );
}

export default SideNav;
