import React from 'react';
import styles from './SearchBar.module.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

function SearchBar() {
	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				<Input placeHolderText='script' />
				<Button buttonText='Search' />
			</div>
			<Button buttonText='Add new Course' />
		</div>
	);
}

export default SearchBar;
