export const courseUpdatePut = async (id, user, token) => {
  try {
    await fetch(`http://localhost:4000/courses/${id}`, {
      method: 'PUT',
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
