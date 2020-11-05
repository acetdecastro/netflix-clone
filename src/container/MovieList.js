import React, {
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react';
import axios from '../axios';
import styles from '../css/MovieList.module.css';
import MovieCardSkeleton from '../component/MovieCardSkeleton';

const MovieCard = lazy(() => import('../component/MovieCard'));

const MovieList = ({ rowTitle, requestURL }) => {
  const [movies, setMovies] = useState([]);;

  useEffect(() => {
    const getMoviesFromAPI = async () => {
      try {
        const response = await axios.get(requestURL);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error)
      }
    }

    getMoviesFromAPI();
  }, [requestURL]);
  
  return (
    <div className={styles.Container}>
      <div className={styles.RowTitle}>
        <h2>{rowTitle}</h2>
      </div>

      <div className={styles.Movies}>
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
