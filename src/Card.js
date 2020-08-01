import React from 'react';
import './Card.css';

function Card(props) {
  const { data } = props;
  const URL = `https://image.tmdb.org/t/p/original/${data.poster_path}`;

  return (
    <div className="card">
      <div>
        <img src={URL} alt={data.title} className="poster" />
      </div>
      <span className="title">{data.title}</span>
    </div>
  );
}

export default Card;
