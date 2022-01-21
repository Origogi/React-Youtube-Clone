import { Avatar } from "@mui/material";
import React from "react";
import "./VideoContainer.css";

function VideoContainer({ imgSrc, avatarSrc, title, subscriber, uploadTime, views }) {
  return (
    <div className="videoContainer">
      <img className="videoContainer_thumbnail" src={imgSrc} />
      <div className="videoContainer_content">
        <Avatar
          src={ avatarSrc }
          sx={{ width: 32, height: 32 }}
        />
        <div className="videoContainer_content_desc">
          <h5>{ title }</h5>
          <h6>{subscriber}</h6>
          <h6>{`${views} · ${uploadTime}`}</h6>

        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
