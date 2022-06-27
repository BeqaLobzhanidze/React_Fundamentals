import './App.css';
import { useState } from 'react';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorList] = useState(mockedAuthorsList);
	const [copyCoursesList, setCopyCoursesList] = useState(mockedCoursesList);
	const [haveNewCourse, setHaveNewCourse] = useState(false);
	const [isKeywordEmpty, setIsKeywordEmpty] = useState(true);

	console.log(isKeywordEmpty);
	return (
		<div className='App'>
			<Header />
			{!haveNewCourse ? (
				<>
					<SearchBar
						copyCoursesList={copyCoursesList}
						setCopyCoursesList={setCopyCoursesList}
						// setCoursesList={setCoursesList}
						coursesList={coursesList}
						setHaveNewCourse={setHaveNewCourse}
						setIsKeywordEmpty={setIsKeywordEmpty}
					/>
					<Courses
						coursesList={coursesList}
						authorsList={authorsList}
						copyCoursesList={copyCoursesList}
						isKeywordEmpty={isKeywordEmpty}
					/>
				</>
			) : (
				<CreateCourse
					authorsList={authorsList}
					setAuthorList={setAuthorList}
					setCoursesList={setCoursesList}
					setHaveNewCourse={setHaveNewCourse}
				/>
			)}
		</div>
	);
}

export default App;
