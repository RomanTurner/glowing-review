import React from 'react'

export default function Img(props) {
    return (
        <div>
            <img className="ui card" src={props.img} />
        </div>
    )
}
