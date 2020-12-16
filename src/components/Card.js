import React from 'react'
import "../css/card.css"

function Card({ src, title, description }) {
    return (
        <div className="carddiv">
            <div className="card">
                <img src={src} alt=""></img>
            </div>
            <div className="card_info">
                <h2 className="aboutme">{title}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

export default Card