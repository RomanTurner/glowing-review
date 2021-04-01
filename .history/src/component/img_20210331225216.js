import React from 'react'

export default function Img(props) {
    return (
        <div>
            <img className="card" src={props.img} />
        </div>
    )
}
