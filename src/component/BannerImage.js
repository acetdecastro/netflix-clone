import React from 'react';
import styles from '../css/BannerImage.module.css'

const BannerImage = ({ imgURL, name }) => {
  return (
    <img
      src={imgURL}
      alt={name}
      className={styles.Image}
    />
  );
};


export default BannerImage;