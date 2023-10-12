export interface validateInfoValues {
	email: string;
}

interface validateInfoErrors {
	email?: string;
}

const validate = (values: validateInfoValues) => {
	const errors: validateInfoErrors = {};

	const defaultMin = 1;
	const defaultMax = 100;

	if (!values.email) {
		errors.email = "The field cannot be empty";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid email";
	} else if (values.email.length > defaultMax) {
		errors.email = `Maximum ${defaultMax} characters`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Minimum ${defaultMin} characters`;
	}

	return errors;
};

export default validate;
