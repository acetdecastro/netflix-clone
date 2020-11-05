import React, { useEffect, useState } from 'react';
import axios from '../axios';
import rowData from '../utils/rowData';
import styles from '../css/Banner.module.css'

const Banner = () => {
  const [movie, setMovie] = useState({});
  const bannerImageSkeleton = (<div className={styles.Backdrop}></div>);

  useEffect(() => {
    const getMovieFromAPI = async () => {
      const response = await axios.get(rowData[1].requestURL);
      const trendingMovies = response.data.results;
      const getRandomTrendingMovieIndex = () => Math.floor(Math.random() * Math.floor(trendingMovies.length));
      setMovie(trendingMovies[getRandomTrendingMovieIndex()]);
    };

    getMovieFromAPI();
  }, []);

  const movieName = movie?.name || movie?.title || movie?.original_name;


  return (
    <section className={styles.Container}>
      <div className={styles.Image__Container}>
        {movie?.backdrop_path ?
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movieName}
          className={styles.Image}
        /> : bannerImageSkeleton}
      </div>
  
      <div className={styles.Vignette__Container}>
        <div className={styles.Vignette__Details}>
          <h1 className={styles.Vignette__Title}>{movieName}</h1>

          {/* <p className={styles.Vignette__Overview}>{movie.overview}</p> */}
        </div>
        
        <div className={styles.Vignette__Actions_Container}>
          <button className={[styles.Vignette__Buttons, styles.Vignette__Play__Button].join(' ')}>
            <svg
              className={styles.Vignette__Play__Button__Icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
                <path d="M4 4l12 6-12 6z"/>
            </svg>

            <span>Play</span>
          </button>

          <button className={[styles.Vignette__Buttons, styles.Vignette__MoreInfo__Button].join(' ')}>
            <svg
              className={styles.Vignette__MoreInfo__Button__Icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
            </svg>

            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;