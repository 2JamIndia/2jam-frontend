import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { generateCertificate } from '../../../redux/actions/user'

import { PassingFeedbackForm } from '../../'

const PassingFeedback: React.FC = () => {
	const { id } = useParams();
	const dispatch = useDispatch()

	const onSubmit = (data: any) => {
		let feedback = ""

		if (data.rate) {
			feedback = `${data.rate}; ${data.comment}`
		}

		dispatch(generateCertificate(id as string, feedback) as any)
	}

	return (
		<div className='passing-feedback'>
			<div className="passing-feedback-text" id="passing-certificate">
				<h3 className="passing-feedback-text__title">
					Your certificate is ready!
				</h3>

				<p className="passing-feedback-text__description">
					We want to be better, and we need your help!
				</p>
			</div>

			<PassingFeedbackForm onSubmit={onSubmit} />
		</div>
	)
}

export default PassingFeedback