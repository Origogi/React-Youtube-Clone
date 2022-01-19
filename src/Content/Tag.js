import React from 'react'
import './Tag.css'

function Tag({ title }) {
    return (
        <div className='tag'>
            <h5>{title}</h5>
        </div>
    )
}

export default Tag
