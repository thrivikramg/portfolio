import React from 'react';
import './card.css'; 

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className='container'>
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
