import { KeyboardOutlined, MicOutlined, Search, SearchOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";
import "./Searcher.css";

function Searcher() {
  return (
    <div className="searcher">
      <div className="seacher_input">
        <input placeholder="검색" />
        <KeyboardOutlined className="seacher_input_keyboard" sx={{ fontSize: 20 }} />
        
        <Divider orientation="vertical" />

        <div className="searcher_button">
          <SearchOutlined />
      </div>
      </div>

      <div className="searcher_mic">
        <MicOutlined sx={{ fontSize: 20 }} />
      </div>
    </div>
  );
}

export default Searcher;
