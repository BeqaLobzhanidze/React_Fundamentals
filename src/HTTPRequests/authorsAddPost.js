export const authorsAddPost = async (user, token) => {
  try {
    await fetch('http://localhost:4000/authors/add', {
      method: 'POST',
      body: JSON.stringify({ name: user }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
