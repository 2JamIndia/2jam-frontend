import React from 'react'
import { useDispatch } from "react-redux";
import { Link as LinkScroll } from "react-scroll";

import { updateUser } from '../../../redux/actions/user'

import { PassingReceiveCertificateForm } from '../../'

const PassingReceiveCertificate: React.FC = () => {
	const dispatch = useDispatch()

	const onSubmit = (data: any) => {
		dispatch(updateUser(data) as any)
	}

	return (
		<div className='passing-certificate'>
			<div className="passing-certificate-text" id="passing-certificate">
				<h3 className="passing-certificate-text__title">
					Congratulations! You’re done with the course!
				</h3>

				<p className="passing-certificate-text__description">
					Last, but most importantly, before we give you your certificate, we’d like to get to know you!
				</p>
			</div>

			<PassingReceiveCertificateForm onSubmit={onSubmit} />
		</div>
	)
}

export default PassingReceiveCertificate