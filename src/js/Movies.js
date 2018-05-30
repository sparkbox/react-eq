import React from 'react';
import ElementQuery from 'react-eq';

const Movies = () => {
  const queries = {
    small: 340,
    medium: 400
  };

  return (
    <ElementQuery queries={queries}>
      <section className="movies">
        <header className="actor">
          <div className="actor-image-container">
            <img
              className="actor-image"
              src="https://ia.media-imdb.com/images/M/MV5BMjE2MjI4NTQxN15BMl5BanBnXkFtZTgwMDMyMDg4NTE@._V1_UY317_CR18,0,214,317_AL_.jpg"
            />
          </div>
          <h1 className="actor-name">Jack Black</h1>
        </header>
        <h2 className="movie-header">Filmography</h2>
        <ul className="movie-list">
          <li className="movie-list--item">
            <img
              className="movie-image"
              src="https://ia.media-imdb.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
            />
            <span className="movie-title">Jumanji: Welcome to the Jungle</span>
          </li>
          <li className="movie-list--item">
            <img
              className="movie-image"
              src="https://ia.media-imdb.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL_.jpg"
            />
            <span className="movie-title">Kung Fu Panda</span>
          </li>
          <li className="movie-list--item">
            <img
              className="movie-image"
              src="https://ia.media-imdb.com/images/M/MV5BMjEwOTMzNjYzMl5BMl5BanBnXkFtZTcwNjczMTQyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
            />
            <span className="movie-title">School of Rock</span>
          </li>
        </ul>
      </section>
    </ElementQuery>
  );
};

export default Movies;
