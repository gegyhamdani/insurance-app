import React from 'react';
import styles from './index.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header__wrapper}>
        <div className={styles.header__title}>
          <h2>Insurance Web App</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
