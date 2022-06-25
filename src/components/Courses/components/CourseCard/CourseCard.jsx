import React from 'react';
import Button from '../../../../common/Button/Button';
import styles from './CourseCard.module.css';
import { FormatCreationDate } from '../../../../helpers/formatCreationDate';
import { GetCourseDuration } from '../../../../helpers/getCourseDuration';

function CourseCard({ courseCard }) {
	return (
		<article className={styles.container}>
			<div className={styles.leftSide}>
				<h2>{courseCard.title}</h2>
				<p>{courseCard.description}</p>
			</div>
			<div className={styles.rightSide}>
				<div>
					<strong>Authors:</strong> beqa asdadasd
				</div>
				<div>
					<strong>Duration:</strong> {GetCourseDuration(courseCard.duration)}
				</div>
				<div>
					<strong>CreatinDate:</strong>
					{FormatCreationDate(courseCard.creationDate)}
				</div>
				<Button buttonText='Show More' />
			</div>
		</article>
	);
}

export default CourseCard;
