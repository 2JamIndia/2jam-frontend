import React from 'react'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { RenderTextarea } from '../../'

import validate from './validate'

const PassingFeedbackForm: React.FC<InjectedFormProps> = ({ handleSubmit, submitting, invalid, pristine, initialize }) => {
	const { isSending } = useTypedSelector(({ user }) => user)

	const [isClickThank, setIsClickThank] = React.useState<boolean>(false)

	const [currentRate, setCurrentRate] = React.useState<number | null>(null)

	const rates = [
		{ title: "I didn’t like it", label: "Please tell us what you did not like, and we’ll do our best to improve!" },
		{ title: "It was ok", label: "We want to be better than just “ok”, what could we improve on?" },
		{ title: "I liked it", label: "Please tell us what you liked, and we’ll keep it in mind!" }
	]

	React.useEffect(() => {
		if (currentRate !== null) initialize({ rate: `${rates[currentRate].title} - ${rates[currentRate].label}` })
	}, [currentRate])

	return (
		<form onSubmit={handleSubmit} className="passing-feedback-form">
			<h4 className="passing-feedback-form__title">
				How do you like the course?
			</h4>

			<div className="passing-feedback-form-btn">
				{rates.map((rate, index) => (
					<button type='button' className={`btn gray passing-feedback-form-btn__btn ${index === currentRate ? "active" : ""}`} key={`passing-feedback-form__btn-${index}`} onClick={() => setCurrentRate(index)}>
						{rate.title}
					</button>
				))}
			</div>

			{currentRate !== null ? (
				<div className="passing-feedback-form-input">
					<Field
						component={RenderTextarea}
						name="comment"
						type='text'
						label={rates[currentRate].label}
					/>
				</div>
			) : null}

			<button
				className={`btn ${submitting || invalid || pristine || isSending ? "disabled" : ""} passing-feedback-form__btn`}
				disabled={submitting || invalid || pristine || isSending}
			>
				Send and receive a certificate {isSending && !isClickThank ? < span className='loader' /> : null}
			</button>

			<button className={`btn-transparent passing-feedback-form__subbtn`} onClick={() => setIsClickThank(true)}>
				No thanks, get a certificate {isSending && isClickThank ? < span className='loader' /> : null}
			</button>
		</form>
	)
}


export default reduxForm<{}>({
	form: "passing-receive-feedback-form",
	validate,
})(PassingFeedbackForm);