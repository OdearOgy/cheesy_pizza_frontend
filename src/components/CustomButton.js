import React from 'react';
import { CustomButtonStls as styles } from '../styles';

const CustomButton = (props) => {
	const { content, className, handleClick } = props;
	return (
		<button onClick={handleClick} className={`${styles.custom__btn} ${className || ''}`}>
			{content}
		</button>
	);
};

export default CustomButton;
