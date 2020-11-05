import React, {
  useState,
  useEffect,
  useCallback,
  Suspense,
  lazy,
} from 'react';
import axios from '../axios';
import styles from '../css/MovieList.module.css';
import MovieCardSkeleton from '../component/MovieCardSkeleton';

const MovieCard = lazy(() => import('../component/MovieCard'));

const MovieList = ({ rowTitle, requestURL }) => {
  const [movies, setMovies] = useState([]);;
  
  const getMoviesFromAPI = useCallback(async () => {
    try {
      const response = await axios.get(requestURL);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error)
    }
  }, [requestURL]);

  useEffect(() => {
    getMoviesFromAPI();
  }, [getMoviesFromAPI]);
  
  return (
    <div className={styles.Container__MovieList}>
      <div className={styles.Container__RowTitle}>
        <h2>{rowTitle}</h2>
      </div>

      <div className={styles.Container__Movies}>
        {movies.map((movie, index) => {
          const animationDelayTime = (150 * index);

          return ( 
            <Suspense 
              key={index}
              fallback={<MovieCardSkeleton
                rowTitle={rowTitle}
                animationDelayTime={`${animationDelayTime}ms`}
              />}
            >
              <MovieCard
                rowTitle={rowTitle}
                key={movie.id}
                {...movie}
              />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
