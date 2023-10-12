import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { RenderInput } from '../'

import validate from './validate'

const LoginForm: React.FC<InjectedFormProps> = ({ handleSubmit, submitting, invalid, pristine }) => {
	const { isSend } = useTypedSelector(({ login }) => login)

	return (
		<form className='reglog-form' onSubmit={handleSubmit}>
			<h2 className="reglog-form__title">
				Login
			</h2>

			<div className="reglog-form-input">
				<Field
					component={RenderInput}
					type="text"
					name="email"
					label="Email"
				/>
			</div>

			<div className="reglog-form-input">
				<Field
					component={RenderInput}
					type="password"
					name="password"
					label="Password"
				/>
			</div>

			<button className={`btn ${submitting || invalid || pristine || isSend ? "disabled" : ""} reglog-form__btn`} disabled={submitting || invalid || pristine || isSend}>
				Login

				{isSend ? <span className="loader"></span> : null}
			</button>

			<Link to="/go/password-recovery" className='reglog-form__recovery'>
				Forgot password?
			</Link>
		</form>
	)
}

export default reduxForm<{}>({
	form: "login-form",
	validate,
})(LoginForm);