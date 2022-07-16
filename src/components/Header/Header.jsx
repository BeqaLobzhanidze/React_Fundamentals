import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import styles from './Header.module.css';
import { Logout } from '../../store/user/actions';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <Logo />
      {user.isAuth ? (
        <>
          <div className={styles.rightSide}>
            <h3>{user.name}</h3>
            <Button
              buttonText='logout'
              onClick={() => {
                localStorage.removeItem('TOKEN');
                dispatch(Logout());
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
