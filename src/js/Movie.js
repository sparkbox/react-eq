import React from 'react';

const Movie = ({ title, img }) => (
  <li className="movie-list--item">
    <img className="movie-image" src={img} />
    <span className="movie-title">{title}</span>
  </li>
);

export default Movie;
