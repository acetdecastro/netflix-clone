import React, { useState, useEffect } from 'react';
import navLogo from '../assets/Netflix_Logo_CMYK.png';
import styles from '../css/Nav.module.css';

const Nav = () => {
  const [showBackground, setShowBackground] = useState(false);
  let navContainerStyles = styles.Container;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });

    return () => window.removeEventListener('scroll', null);
    
  }, []);

  if (showBackground) {
    navContainerStyles = [styles.Container, styles.Opacity].join(' ');
  }

  return (
    <nav className={navContainerStyles}>
      <div>
        <a href="/"><img className={styles.Logo} src={navLogo} alt="Netflix"/></a>
      </div>
      <div>
        <img className={styles.Avatar} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="Avatar"/>
      </div>
    </nav>
  );
}

export default Nav;