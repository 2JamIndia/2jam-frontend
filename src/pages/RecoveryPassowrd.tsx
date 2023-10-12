import React from 'react'
import { useDispatch } from 'react-redux';

import { sendPasswordRecovery } from '../redux/actions/password_recovery'

import { RecoveryPassowrdForm } from '../components/'

import Logo from "../assets/images/logo.svg";

const RecoveryPassowrd: React.FC = () => {
	const dispatch = useDispatch()

	const onSubmit = (data: any) => {
		return dispatch(sendPasswordRecovery(data.email) as any)
	}

	return (
		<section className="reglog">
			<img src={Logo} alt="2Jam" className="reglog__logo" />

			<RecoveryPassowrdForm onSubmit={onSubmit} />
		</section>
	)
}

export default RecoveryPassowrd