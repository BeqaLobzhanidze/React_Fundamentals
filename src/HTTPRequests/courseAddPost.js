export const courseAddPost = async (user, token) => {
  try {
    await fetch('http://localhost:4000/courses/add', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
