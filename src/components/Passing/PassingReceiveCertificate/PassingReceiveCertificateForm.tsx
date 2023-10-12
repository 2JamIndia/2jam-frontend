import React from 'react'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { RenderInput } from '../../'

import validate from './validate'

const PassingReceiveCertificateForm: React.FC<InjectedFormProps> = ({ handleSubmit, submitting, invalid, pristine }) => {
	const { isSending } = useTypedSelector(({ user }) => user)

	return (
		<form onSubmit={handleSubmit} className="passing-certificate-form">
			<div className="passing-certificate-form-input">
				<Field
					component={RenderInput}
					name="name"
					type='text'
					label="Your name"
				/>
			</div>

			<div className="passing-certificate-form-input">
				<Field
					component={RenderInput}
					name="surname"
					type='text'
					label="Your surname"
				/>
			</div>

			<button className={`btn ${submitting || invalid || pristine || isSending ? "disabled" : ""} passing-certificate-form__btn`} disabled={submitting || invalid || pristine || isSending}>
				Receive Certificate {isSending ? <span className='loader'></span> : null}
			</button>
		</form>
	)
}


export default reduxForm<{}>({
	form: "passing-receive-certificate-form",
	validate,
})(PassingReceiveCertificateForm);