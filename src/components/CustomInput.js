import React from 'react';
import { useField } from 'formik';

const CustomInput = (props) => {
	const { label, labelstyles, errorstyles, inputcomponent = 'input', inputstyles } = props;
	const [field, meta] = useField(props);
	const Input = inputcomponent;
	return (
		<label className={labelstyles}>
			<div>{label}</div>
			<Input {...props} {...field} className={inputstyles} />
			{meta.touched && meta.error ? <div className={errorstyles}>{meta.error}</div> : null}
		</label>
	);
};

export default CustomInput;
