import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import styles from './Header.module.css';
import { Logout } from '../../store/user/actions';
import { adminHeader } from '../../helpers/adminHeaderName';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    await fetch('http://localhost:4000/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token,
      },
    });
    dispatch(Logout());
  };
  const user = useSelector((state) => state.user);
  return (
    <header className={styles.header}>
      <Logo />
      {user.isAuth ? (
        <>
          <div className={styles.rightSide}>
            <h3 data-testid='header-1'>{adminHeader(user.name)}</h3>
            <Button
              buttonText='logout'
              onClick={() => {
                localStorage.removeItem('TOKEN');
                logout();
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
