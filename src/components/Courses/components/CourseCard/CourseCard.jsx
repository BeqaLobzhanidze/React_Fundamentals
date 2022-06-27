import React from 'react';
import Button from '../../../../common/Button/Button';
import styles from './CourseCard.module.css';
import { FormatCreationDate } from '../../../../helpers/formatCreationDate';
import { GetCourseDuration } from '../../../../helpers/getCourseDuration';
import { GetAuthors } from '../../../../helpers/getAuthors';
import PropTypes from 'prop-types';

function CourseCard({ courseCard, authorsList }) {
	return (
		<article className={styles.container}>
			<div className={styles.leftSide}>
				<h2>{courseCard.title}</h2>
				<p>{courseCard.description}</p>
			</div>
			<div className={styles.rightSide}>
				<div>
					<strong>Authors:</strong>
					{GetAuthors(courseCard.authors, authorsList).map((authors) => (
						<span key={authors} className={styles.authors}>
							{authors}
						</span>
					))}
				</div>
				<div>
					<strong>Duration:</strong> {GetCourseDuration(courseCard.duration)}
				</div>
				<div>
					<strong className={styles.creationDate}>CreatinDate:</strong>
					{FormatCreationDate(courseCard.creationDate)}
				</div>
				<Button buttonText='Show More' />
			</div>
		</article>
	);
}

CourseCard.propTypes = {
	courseCard: PropTypes.object,
	authorsList: PropTypes.array,
};

export default CourseCard;
