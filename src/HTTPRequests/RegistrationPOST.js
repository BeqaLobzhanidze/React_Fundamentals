export const RegisterUser = async (e, navigate, user, setError) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (result.successful) navigate('../login');
    if (!result.successful)
      setError(`error occured with status code ${result.successful}`);
  } catch (error) {
    setError('invalid post request');
  }
};
