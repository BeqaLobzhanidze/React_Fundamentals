import { useSelector } from 'react-redux';

function useAuthors() {
  const authors = useSelector((state) => state.authors);
  return authors;
}

export default useAuthors;
