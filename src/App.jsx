import './App.css';
import { useState } from 'react';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import Courses from './components/Courses/Courses';

function App() {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorList] = useState(mockedAuthorsList);
	return (
		<div className='App'>
			<Header />
			<SearchBar />
			<Courses coursesList={coursesList} authorsList={authorsList} />
		</div>
	);
}

export default App;
