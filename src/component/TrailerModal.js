import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/TrailerModal.module.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const TrailerModal = ({original_title, isShowing, hide}) => {
  const [movieId, setMovieId] = useState('');

  const opts = {
    height: '390',
    width: '100',
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    const getMovieId = async () => {
      try {
        const _movieId = await movieTrailer(original_title, { id: true });
        setMovieId(_movieId);
      } catch (error) {
        const _movieId = await movieTrailer("finding nemo", { id: true });
        setMovieId(_movieId);
      }
    };

    getMovieId();
  }, [original_title]);

  return (
    isShowing ?
      ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.modal__overlay}/>
          <div className={styles.modal__wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div>
              <div className={styles.modal__header}>
                <button type="button" className={styles.modal__close__button} data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                <YouTube
                  className={styles.modal}
                  videoId={movieId}
                  opts={opts}
                />
            </div>
          </div>
        </React.Fragment>, document.body)
      :
        null
  )
};

export default TrailerModal;