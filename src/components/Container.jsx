import React from 'react'


// Higher - Order Component for wrapping
export default function Container(props) {
    return (
        <div className='container'>{props.children}</div>
    )
}