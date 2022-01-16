import React from "react";
import "./Header.css";
import Actions from "./Actions";
import Searcher from "./Searcher";
import { Menu } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <Menu />
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="header_searcher">
        <Searcher />
      </div>
      <div className="header_actions">
        <Actions />
      </div>
    </div>
  );
}

export default Header;
