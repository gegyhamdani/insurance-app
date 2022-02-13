import React from 'react';

import styles from './index.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Insurance App</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
