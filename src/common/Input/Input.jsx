import React from 'react';
import styles from './Input.module.css';

function Input({ labelText, placeHolderText, onChange }) {
	return (
		<div className={styles.input}>
			<label htmlFor='input'>{labelText}</label>
			<input
				type='text'
				id='input'
				placeholder={placeHolderText}
				onChange={onChange}
			/>
		</div>
	);
}

export default Input;
