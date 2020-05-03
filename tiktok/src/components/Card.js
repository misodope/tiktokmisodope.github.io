import React from 'react';
import './Card.scss';

export const Card = ({ title, description, tech, img = '' }) => {

  return (
    <div className="card">
      <div>
        <div className="card__shadow"/>
        <img src={img} alt={title} />
      </div>
      <div className="card__details">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card__details--tech">
          { tech.map(thing => <span key={thing}>{thing}</span>) }
        </div>
      </div>
    </div>
  )
}