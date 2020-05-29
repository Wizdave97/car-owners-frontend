import React from 'react';

const ColorTag = (props) => {
    return (
        <div className="w-4 h-4 mx-2 my-2 rounded-full" style={{backgroundColor:props.color}}></div>
    )
}

export default ColorTag;