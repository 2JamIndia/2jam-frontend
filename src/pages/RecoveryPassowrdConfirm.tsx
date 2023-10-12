import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { sendPasswordRecoveryConfirm } from '../redux/actions/password_recovery'

import { RecoveryPassowrdConfirmForm } from '../components/'

import Logo from "../assets/images/logo.svg";

const RecoveryPassowrdConfirm: React.FC = () => {
	const { hash } = useParams()

	const dispatch = useDispatch()

	const onSubmit = (data: any) => {
		return dispatch(sendPasswordRecoveryConfirm(data.password, hash as string) as any)
	}

	return (
		<section className="reglog">
			<img src={Logo} alt="2Jam" className="reglog__logo" />

			<RecoveryPassowrdConfirmForm onSubmit={onSubmit} />
		</section>
	)
}

export default RecoveryPassowrdConfirm