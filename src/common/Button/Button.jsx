import React from 'react';
import styles from './Button.module.css';

function Button({ buttonText, onClick }) {
	return (
		<button onClick={onClick} className={styles.button}>
			{buttonText}
		</button>
	);
}

export default Button;
