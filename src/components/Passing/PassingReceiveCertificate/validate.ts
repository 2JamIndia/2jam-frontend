export interface validateInfoValues {
	name: string;
	surname: string;
}

interface validateInfoErrors {
	name?: string;
	surname?: string;
}

const validate = (values: validateInfoValues) => {
	const errors: validateInfoErrors = {};

	const defaultMin = 1;
	const defaultMax = 100;

	if (!values.name) {
		errors.name = "The field cannot be empty";
	} else if (values.name.length > defaultMax) {
		errors.name = `Maximum ${defaultMax} characters`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Minimum ${defaultMin} characters`;
	}
	if (!values.surname) {
		errors.surname = "The field cannot be empty";
	} else if (values.surname.length > defaultMax) {
		errors.surname = `Maximum ${defaultMax} characters`;
	} else if (values.surname.length < defaultMin) {
		errors.surname = `Minimum ${defaultMin} characters`;
	}

	return errors;
};

export default validate;
