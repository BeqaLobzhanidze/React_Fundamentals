import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  const GetName = useMemo(() => localStorage.getItem('NAME'));
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Logo />
      {localStorage.getItem('TOKEN') ? (
        <>
          <div className={styles.rightSide}>
            <h3>{GetName}</h3>
            <Button
              buttonText='logout'
              onClick={() => {
                localStorage.removeItem('TOKEN');
                navigate('../login');
              }}
            />
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Header;
