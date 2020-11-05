import React from 'react';
import styles from '../css/MovieCardSkeleton.module.css'

const MovieCardSkeleton = ({ rowTitle, animationDelayTime }) => {
  let divStyles = styles.Backdrop;

  if (rowTitle === 'Netflix Originals') {
    divStyles = styles.Poster;
  }

  return (
    <div
      className={divStyles}
      style={{ animationDelay: animationDelayTime }}
    >
    </div>
  );
};


export default MovieCardSkeleton;