import React from 'react';
import styles from './AuthorItem.module.css';
import Button from '../../../../common/Button/Button';
import PropTypes from 'prop-types';

function AuthorItem({ name, onClick, type }) {
	return (
		<div className={styles.addAuthor}>
			<span>{name}</span>
			{type === 'delete' ? (
				<Button buttonText='delete author' onClick={onClick} />
			) : (
				<Button buttonText='add author' onClick={onClick} />
			)}
		</div>
	);
}

AuthorItem.propTypes = {
	name: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default AuthorItem;
