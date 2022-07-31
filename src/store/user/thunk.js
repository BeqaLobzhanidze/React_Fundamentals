import { GetRole, Login, Logout } from './actions';

const getUserRole = (token) => {
  return async function (dispatch) {
    const response = await fetch('http://localhost:4000/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const result = await response.json();
    if (result.statusCode !== 403 && result.successful) {
      dispatch(
        GetRole(
          result.result.role,
          result.result.name,
          localStorage.getItem('TOKEN')
        )
      );
    }
  };
};

const loginUser = (e, navigate, user, setError) => {
  e.preventDefault();
  console.log(user);
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (!result.result) {
        setError('Inccorect credentials');
        return;
      }
      if (localStorage.getItem('TOKEN')) localStorage.removeItem('TOKEN');
      localStorage.setItem('TOKEN', result.result);

      if (localStorage.getItem !== null)
        if (localStorage.getItem('NAME')) localStorage.removeItem('NAME');
      localStorage.setItem('NAME', result.user.name);

      dispatch(Login({ token: result.result, name: result.user.name }));
      dispatch(getUserRole(result.result));
      if (result.successful) navigate('../courses');
    } catch (error) {
      setError('Invalid Post request');
      localStorage.removeItem('TOKEN');
    }
  };
};

const logout = (user) => {
  return async function (dispatch) {
    await fetch('http://localhost:4000/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token,
      },
    });
    dispatch(Logout());
  };
};

export { getUserRole, loginUser, logout };
