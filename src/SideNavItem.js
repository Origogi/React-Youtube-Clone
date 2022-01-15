import React from "react";
import './SideNavItem.css'

function SideNavItem({ image, title }) {
  return (
    <div className="sideNav_item">
      {image}
      <h5>{title}</h5>
    </div>
  );
}

export default SideNavItem;
