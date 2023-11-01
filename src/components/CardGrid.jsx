import React from "react";
import '/src/styles/CardGrid.css';
import Card from './Card';

const CardGrid = ({ cards, onCardClick }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          cardData={card}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  )
}

export default CardGrid;