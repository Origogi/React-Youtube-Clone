import React from "react";
import "./SideNavItem.css";

function SideNavItem({ image, title }) {
  return (
    <div className="sideNav_item">
      <div className="sideNav_item_icon">{image}</div>
      <h5>{title}</h5>
    </div>
  );
}

export default SideNavItem;
