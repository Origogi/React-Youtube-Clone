import React from "react";
import "./TagContainer.css";
import { Divider } from "@mui/material";
import Tag from "./Tag";

function TagContainer() {
  return (
    <div className="tagContainer">
      <Divider />
      <div className="tagContainer_col">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />

      </div>
      <Divider  />
    </div>
  );
}

export default TagContainer;
