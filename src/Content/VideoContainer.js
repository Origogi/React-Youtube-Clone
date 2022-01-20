import React from 'react';
import './VideoContainer.css'

function VideoContainer({ imgSrc }) {
  return <div className='videoContainer'>
      <img className = 'videoContainer_thumbnail' src = { imgSrc }/>
  </div>;
}

export default VideoContainer;
