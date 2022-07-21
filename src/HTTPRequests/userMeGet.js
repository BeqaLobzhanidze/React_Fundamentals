import { GetRole } from '../store/user/actions';

export const getUserRole = (token) => {
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
