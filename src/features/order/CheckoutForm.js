import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { CustomInput, CustomButton } from '../../components';

import styles from './Checkout-form.module.css';

const initialStorageDelInfo = JSON.parse(localStorage.getItem('deliveryInfo'));

const checkoutValidation = Yup.object({
	fullName: Yup.string().min(2, 'Must be more than 2 character ').required('Name is Required'),
	phone: Yup.string()
		.matches(
			/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
			'Phone number must contain the country code and the phone number',
		)
		.required('Phone number is required'),
	comments: Yup.string().max(80, 'Must be 80 or less characters'),
	address: Yup.string().required('Address is required'),
	payment: Yup.string().required('Payment method is required'),
});

const CheckoutForm = ({ handleCheckout, handleCancel, totalPrice }) => {
	return (
		<Formik
			initialValues={
				initialStorageDelInfo || {
					address: '',
					fullName: '',
					phone: '',
					comments: '',
					payment: '',
					rememberMe: false,
				}
			}
			validationSchema={checkoutValidation}
			validateOnChange
			onSubmit={handleCheckout}>
			{() => (
				<Form className={styles.checkout__form}>
					<CustomInput
						placeholder="Achajour Lover's Park 21 M. Baghramyan Avenue, Yerevan 0019"
						label='Your Address *'
						labelstyles={styles.address__label}
						errorstyles={styles.error}
						name='address'
						type='address'
						inputstyles={styles.address__field}
					/>

					<CustomInput
						placeholder='Jon Doe'
						label='Your Name *'
						labelstyles={styles.name__label}
						errorstyles={styles.error}
						name='fullName'
						inputstyles={styles.name__field}
					/>

					<CustomInput
						placeholder='+374124489898'
						label='Your Phone *'
						labelstyles={styles.phone__label}
						errorstyles={styles.error}
						name='phone'
						inputstyles={styles.phone__field}
					/>

					<CustomInput
						label='Payment method *'
						labelstyles={styles.payment__label}
						errorstyles={styles.error}
						name='payment'
						inputstyles={styles.payment__field}
						inputcomponent='select'>
						<option value=''>__</option>
						<option value='cash'>Cash on Delivery</option>
					</CustomInput>

					<CustomInput
						placeholder='Any additional comments'
						label='Comments'
						labelstyles={styles.comments__label}
						errorstyles={styles.error}
						name='comments'
						inputstyles={styles.comments__field}
						inputcomponent='textarea'
					/>

					<div className={styles.action__btns}>
						<CustomInput
							label='Save Delivery Info'
							labelstyles={styles.remember__label}
							errorstyles={styles.error}
							name='rememberMe'
							type='checkbox'
							inputstyles={styles.remember__btn}
							title='Check if you want to save your delivery data for the future use.'
						/>

						<CustomButton
							className={styles.cancel__btn}
							handleClick={handleCancel}
							type='button'
							content='Cancel'
							title='Will cancel the order and remove all the items from the cart.'
						/>

						<CustomButton
							className={styles.order__btn}
							type='submit'
							content='Order now'
							title={`Make an order with the total price of $${totalPrice}`}
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default CheckoutForm;
