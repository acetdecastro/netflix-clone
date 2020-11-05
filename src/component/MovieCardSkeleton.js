import React from 'react';
import styles from '../css/MovieCardSkeleton.module.css'

const MovieCardSkeleton = ({ rowTitle, animationDelayTime }) => {
  let divStyles = styles.Card__Backdrop;

  if (rowTitle === 'Netflix Originals') {
    divStyles = styles.Card__Poster;
  }

  console.log(divStyles)

  return (
    <div
      className={divStyles}
      style={{ animationDelay: animationDelayTime }}
    >
    </div>
  );
};


export default MovieCardSkeleton;