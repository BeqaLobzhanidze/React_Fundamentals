import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';

function Courses({ coursesList, authorsList }) {
	return (
		<div>
			{coursesList.map((courseCard) => (
				<CourseCard key={courseCard.id} courseCard={courseCard} />
			))}
		</div>
	);
}

export default Courses;
