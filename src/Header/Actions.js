import React from 'react'
import './Actions.css'
import { VideoCallOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function Actions() {
    return (
        <div className='actions'>
            <VideoCallOutlined />
            <VideoCallOutlined />
            <VideoCallOutlined />
            <Avatar 
                src='https://yt3.ggpht.com/yti/APfAmoFK0nBeTNqtTweNKKREgyYOjILqudmrc2yKfA=s88-c-k-c0x00ffffff-no-rj-mo'
            />
        </div>
    )
}

export default Actions
