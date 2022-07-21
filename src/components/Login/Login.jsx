import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { loginUser } from '../../HTTPRequests/loginPOST';
import styles from './Login.module.css';
import { REGISTRATION } from '../../RouterConstants/constant';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        loginUser(e, navigate, user, setError, dispatch);
      }}
    >
      <h1>Login</h1>
      <Input
        labelText='Email'
        placeHolderText=' Enter Email'
        type='email'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Input
        labelText='Password'
        placeHolderText=' Enter Password'
        type='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Button buttonText='Login' />
      <p>
        if you not have an account you can
        <Link to={REGISTRATION}>Registration</Link>
      </p>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    </form>
  );
};

export default Login;
