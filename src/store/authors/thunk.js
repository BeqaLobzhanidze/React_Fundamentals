import { AddAuthors } from './actions';

const authorsAddPost = (user, token, author) => {
  return async function (dispatch) {
    try {
      await fetch('http://localhost:4000/authors/add', {
        method: 'POST',
        body: JSON.stringify({ name: user }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      dispatch(AddAuthors({ name: author.name, id: author.id }));
    } catch (error) {
      throw new Error(error);
    }
  };
};

export { authorsAddPost };
