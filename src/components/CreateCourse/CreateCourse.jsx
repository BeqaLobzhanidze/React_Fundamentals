import React, { useState } from 'react';

import styles from './CreateCourse.module.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { GetCourseDuration } from '../../helpers/getCourseDuration';
import { CorrectAuthorsFormat } from '../../helpers/correctAuthorsFormat';
import { DoubleAuthorCheck } from '../../helpers/doubleAuthorsCheck';
import PropTypes from 'prop-types';
import ConditionalLink from './utills/ConditionalLink';
import { IsEmptyForm } from '../../helpers/isEmptyForm';
import { GetExactCreationDate } from '../../helpers/getExactCreateDate';

function CreateCourse({ authorsList, setAuthorList, setCoursesList }) {
	const [customAuthor, setCustomAuthor] = useState('');
	const [newCourseAuthors, setNewCourseAuthors] = useState([]);
	const [copyAuthorList, setCopyAuthorList] = useState(authorsList);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const CreateAuthor = () => {
		setCopyAuthorList((prevAuthor) => [
			...prevAuthor,
			{ name: customAuthor, id: Math.random().toString(36).substr(2, 9) },
		]);
		setCustomAuthor('');
	};

	const AddAuthor = (id) => {
		let AddedAuthor = copyAuthorList.find((author) => author.id === id);
		setNewCourseAuthors((prevAuthor) => [...prevAuthor, AddedAuthor]);
		setCopyAuthorList(copyAuthorList.filter((author) => author.id !== id));
	};

	const DeleteAuthor = (id) => {
		let DeletedAuthor = newCourseAuthors.find((author) => author.id === id);
		setCopyAuthorList((prevAuthor) => [...prevAuthor, DeletedAuthor]);
		setNewCourseAuthors(newCourseAuthors.filter((author) => author.id !== id));
	};

	const CreateNewCourse = () => {
		if (IsEmptyForm(title, description, newCourseAuthors, duration)) {
			alert('Fill form correctly');
			return;
		}
		setCoursesList((prevCourses) => [
			...prevCourses,
			{
				id: Math.random().toString(36).substr(2, 9),
				title,
				description,
				creationDate: GetExactCreationDate(),
				duration: Number(duration),
				authors: CorrectAuthorsFormat(newCourseAuthors),
			},
		]);
		setAuthorList((prevAuthor) => [
			...prevAuthor,
			...DoubleAuthorCheck(prevAuthor, newCourseAuthors),
		]);
	};

	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<Input
					labelText='Title'
					placeHolderText='Enter Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<ConditionalLink
					to='/'
					condition={
						!IsEmptyForm(title, description, newCourseAuthors, duration)
					}
				>
					<Button buttonText='Create Course' onClick={CreateNewCourse} />
				</ConditionalLink>
			</div>
			<div className={styles.textarea}>
				<label>Description:</label>
				<textarea
					placeholder='Enter Description'
					minLength={2}
					className={styles.placeholder}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className={styles.authorsCreation}>
				<aside className={styles.leftAside}>
					<div>
						<h2>Add author</h2>
						<Input
							labelText='Author Name'
							placeHolderText=' Enter author name..'
							value={customAuthor}
							onChange={(e) => setCustomAuthor(e.target.value)}
						/>
						<Button buttonText='create author' onClick={CreateAuthor} />
					</div>
					<div>
						<h2>Duration</h2>
						<Input
							labelText='Duration'
							placeHolderText='Enter duration ...'
							type='number'
							value={duration}
							onChange={(e) => setDuration(e.target.value)}
						/>
						<h4>Duration: {GetCourseDuration(duration)} hours</h4>
					</div>
				</aside>
				<aside className={styles.rightAside}>
					<div className={styles.auth}>
						<h2>Authors</h2>
						{copyAuthorList.map(({ name, id }) => (
							<AuthorItem name={name} key={id} onClick={() => AddAuthor(id)} />
						))}
					</div>
					<div className={styles.auth}>
						<h2>Course authors</h2>
						{newCourseAuthors.length !== 0 ? (
							newCourseAuthors.map(({ id, name }) => (
								<AuthorItem
									name={name}
									type='delete'
									key={id}
									onClick={() => DeleteAuthor(id)}
								/>
							))
						) : (
							<h5>authors list is empty</h5>
						)}
					</div>
				</aside>
			</div>
		</section>
	);
}
CreateCourse.propTypes = {
	authorsList: PropTypes.array,
	setAuthorList: PropTypes.func,
	setCoursesList: PropTypes.func,
};

export default CreateCourse;
