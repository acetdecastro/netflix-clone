import React from 'react';
import styles from '../css/MovieCard.module.css';

const Movie = ({ rowTitle, backdrop_path, poster_path, original_title }) => {
  let imgURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  let imgStyles = styles.Backdrop;

  if (rowTitle === 'Netflix Originals') {
    imgURL = `https://image.tmdb.org/t/p/original/${poster_path}`;
    imgStyles = styles.Poster;
  }
  
  if (imgURL.includes('null')) {
    imgURL = 'https://cdn4.vectorstock.com/i/1000x1000/61/43/no-signal-tv-test-card-of-color-bars-vector-22656143.jpg'
  }

  return (
    <div>
      <img
        src={imgURL}
        alt={original_title}
        className={imgStyles}
      />
    </div>
  );
};

export default Movie;
