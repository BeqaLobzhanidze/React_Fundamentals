import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { registerUser } from '../../HTTPRequests/registrationPOST';
import styles from './Registration.module.css';
import { LOGIN } from '../../RouterConstants/constant';

const Registration = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  return (
    <form
      className={styles.container}
      onSubmit={(e) => registerUser(e, navigate, user, setError)}
    >
      <h1>Registration</h1>
      <Input
        labelText='Name'
        placeHolderText=' Enter Name'
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
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
      <Button buttonText='Registration' />
      <p>
        if you have an account you can <Link to={LOGIN}>Login</Link>
      </p>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    </form>
  );
};

export default Registration;
