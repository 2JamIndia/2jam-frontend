export interface validateInfoValues {
	password: string;
	repeat_password: string;
}

interface validateInfoErrors {
	password?: string;
	repeat_password?: string
}

const validate = (values: validateInfoValues) => {
	const errors: validateInfoErrors = {};

	const defaultMin = 1;
	const defaultMax = 100;

	if (!values.password) {
		errors.password = "The field cannot be empty";
	} else if (values.password.length > defaultMax) {
		errors.password = `Maximum ${defaultMax} characters`;
	} else if (values.password.length < defaultMin) {
		errors.password = `Minimum ${defaultMin} characters`;
	}

	if (!values.repeat_password) {
		errors.repeat_password = "The field cannot be empty";
	} else if (values.repeat_password.length > defaultMax) {
		errors.repeat_password = `Maximum ${defaultMax} characters`;
	} else if (values.repeat_password.length < defaultMin) {
		errors.repeat_password = `Minimum ${defaultMin} characters`;
	}else if (values.password !== values.repeat_password) {
		errors.repeat_password = `Passwords are not equal`;
	}

	return errors;
};

export default validate;
