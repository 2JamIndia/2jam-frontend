import React from 'react'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { RenderInput } from '../'

import validate from './validate'

const RecoveryPassowrdConfirmForm: React.FC<InjectedFormProps> = ({ handleSubmit, submitting, invalid, pristine }) => {
	const { isSend } = useTypedSelector(({ password_recovery }) => password_recovery)

	return (
		<form className='reglog-form' onSubmit={handleSubmit}>
			<h2 className="reglog-form__title">
				New password
			</h2>

			<div className="reglog-form-input">
				<Field
					component={RenderInput}
					type="password"
					name="password"
					label="New password"
				/>
			</div>

			<div className="reglog-form-input">
				<Field
					component={RenderInput}
					type="password"
					name="repeat_password"
					label="Repeat new password"
				/>
			</div>

			<button className={`btn ${submitting || invalid || pristine ? "disabled" : ""} reglog-form__btn`} disabled={submitting || invalid || pristine}>
				w Password

				{isSend ? <span className="loader"></span> : null}
			</button>
		</form>
	)
}

export default reduxForm<{}>({
	form: "recovery-passowrd-confirm-form",
	validate,
})(RecoveryPassowrdConfirmForm);