import React from 'react'
import "../css/card.css"

function Card2({ src, title, description }) {
    return (
        <div className="carddiv">
            <div className="card_info" >
                <h2 className="aboutme">{title}</h2>
                <h3>{description}</h3>
            </div>
            <div className="card" >
                <img src={src} alt=""></img>
            </div>
        </div>
    )
}

export default Card2