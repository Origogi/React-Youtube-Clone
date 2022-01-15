import {
  AccessTimeOutlined,
  ExpandMore,
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
import { Avatar, Divider } from "@mui/material";
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
        <SideNavItem
          title="센서스튜디오"
          image={
            <Avatar
              src="https://yt3.ggpht.com/ytc/AKedOLTT8dpXCGuR_QtqKLyFKgbb1x_fz-WDWtJTbfDXeQ=s88-c-k-c0x00ffffff-no-rj"
              sx={{ width: 20, height: 20 }}
            />
          }
        />
        <SideNavItem
          title="드림코딩 by 엘리"
          image={
            <Avatar
              src="https://yt3.ggpht.com/ytc/AKedOLRfd_D7OLG7kY-j4nhX9VD-q4phRC-ErDTVn58gNw=s88-c-k-c0x00ffffff-no-rj"
              sx={{ width: 20, height: 20 }}
            />
          }
        />
        <SideNavItem
          title="원신"
          image={
            <Avatar
              src="https://yt3.ggpht.com/Xtui8KPgKV12Embc2OelE3IILvmXex37iC4fCmLrJ04IHl5S_eln4J6smWoafQ6gUzL8mEcWRg=s88-c-k-c0x00ffffff-no-rj"
              sx={{ width: 20, height: 20 }}
            />
          }
        />
        <SideNavItem
          title="Clever Programmer"
          image={
            <Avatar
              src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
              sx={{ width: 20, height: 20 }}
            />
          }
        />
        <SideNavItem
          title="퇴사한 이형"
          image={
            <Avatar
              src="https://yt3.ggpht.com/ytc/AKedOLSQ-avOpDyWX1X8UPMLATkmcGv_6Kg6-8WeKi8=s88-c-k-c0x00ffffff-no-rj"
              sx={{ width: 20, height: 20 }}
            />
          }
        />
        <SideNavItem
          title="지식한입"
          image={
            <Avatar
              src="https://yt3.ggpht.com/ytc/AKedOLSdpMtP2ALvRjRylieALjyqJzNnhBOotee1X8ne=s88-c-k-c0x00ffffff-no-rj"
              sx={{ width: 20, height: 20 }}
            />
          }
        />
        <SideNavItem title="20개 더보기" image={<ExpandMore />} />
      </div>
    </div>
  );
}

export default SideNav;
