import React from 'react';
import MovieList from './MovieList';
import styles from '../css/Row.module.css'

const Row = ({ rowTitle, requestURL }) => {
  return (
    <section className={styles.Container}>
      <MovieList
        rowTitle={rowTitle}
        requestURL={requestURL}
      />
    </section>
  );
};

export default Row;