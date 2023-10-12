import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { RenderInput } from '../'

import validate from './validate'

const RecoveryPassowrdForm: React.FC<InjectedFormProps> = ({ handleSubmit, submitting, invalid, pristine }) => {
	const { isSend } = useTypedSelector(({ password_recovery }) => password_recovery)

	return (
		<form className='reglog-form' onSubmit={handleSubmit}>
			<Link to="/go/login" className="reglog-form__back">
				<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 1L2 7.96464L8.94142 15" strokeWidth="2" />
				</svg>

				Back
			</Link>

			<h2 className="reglog-form__title">
				Recovery Passowrd
			</h2>

			<div className="reglog-form-input">
				<Field
					component={RenderInput}
					type="text"
					name="email"
					label="Email"
				/>
			</div>

			<button className={`btn ${submitting || invalid || pristine ? "disabled" : ""} reglog-form__btn`} disabled={submitting || invalid || pristine}>
				Send a link to reset password

				{isSend ? <span className="loader"></span> : null}
			</button>
		</form>
	)
}

export default reduxForm<{}>({
	form: "recovery-passowrd-form",
	validate,
})(RecoveryPassowrdForm);