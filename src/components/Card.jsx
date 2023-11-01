import React from "react";
import '/src/styles/Card.css'

const Card= ({ cardData, onCardClick}) => {
  return (
    <div className="card-box" onClick={() => onCardClick(cardData)}>
      <div className="img-box">
        <img src={cardData.image} className="logo" alt="Card" />
      </div>
      <p className="character-name">{cardData.name}</p>
    </div>
  )
}

export default Card;