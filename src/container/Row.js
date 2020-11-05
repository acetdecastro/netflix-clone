import React from 'react';
import MovieList from './MovieList';

const Row = ({ rowTitle, requestURL }) => {
  return (
    <section>
      <div>
        <MovieList
          rowTitle={rowTitle}
          requestURL={requestURL}
        />
      </div>
    </section>
  );
};

export default Row;