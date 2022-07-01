import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.rightSide}>
        <h3>Dave</h3> <Button buttonText='logout' />
      </div>
    </header>
  );
}

export default Header;
