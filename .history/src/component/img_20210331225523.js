import React from 'react'

export default function Img(props) {
    return (
        <div>
            <img className="ui image" src={props.img} />
        </div>
    )
}
