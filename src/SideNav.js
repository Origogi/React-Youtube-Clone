import {
  AccessTimeOutlined,
  ExploreOutlined,
  HistoryOutlined,
  HomeOutlined,
  Menu,
  PlayCircleOutline,
  Shop2Outlined,
  SubscriptionsOutlined,
  ThumbUpAltOutlined,
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
      <div className="sideNav_body">
        <SideNavItem title="홈" image={<HomeOutlined />} />
        <SideNavItem title="탐색" image={<ExploreOutlined />} />
        <SideNavItem title="구독" image={<SubscriptionsOutlined />} />
        <SideNavItem title="Originals" image={<YouTube />} />
        <SideNavItem title="Youtube Music" image={<PlayCircleOutline />} />
        <div className="sideNav_divider">
          <Divider />
        </div>
        <SideNavItem title="보관함" image={<Shop2Outlined />} />
        <SideNavItem title="시청 기록" image={<HistoryOutlined />} />
        <SideNavItem title="내 동영상" image={<PlayCircleOutline />} />
        <SideNavItem title="나중에 볼 동영상" image={<AccessTimeOutlined />} />
        <SideNavItem
          title="좋아요 표시한 동영상"
          image={<ThumbUpAltOutlined />}
        />
        <div className="sideNav_divider">
          <Divider />
        </div>
        <div className="sideNav_subscribe_label">
          <h6>구독</h6>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
