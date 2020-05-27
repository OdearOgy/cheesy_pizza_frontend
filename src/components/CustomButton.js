import React from 'react';
import { CustomButtonStls as styles } from '../styles';

const CustomButton = ({ content, className, handleClick, ...props }) => {
	return (
		<button onClick={handleClick} className={`${styles.custom__btn} ${className || ''}`} {...props}>
			{content}
		</button>
	);
};

export default CustomButton;
