export const LoginUser = async (e, navigate, user, setError) => {
  e.preventDefault();
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

    if (localStorage.getItem('NAME')) localStorage.removeItem('NAME');
    localStorage.setItem('NAME', result.user.name);

    if (result.successful) navigate('../courses');
  } catch (error) {
    setError('Invalid Post request');
  }
};
