import React from 'react'
import { useDispatch } from 'react-redux';

import { sendLogin } from '../redux/actions/login'

import { LoginForm } from '../components/'

import Logo from "../assets/images/logo.svg";

const Login: React.FC = () => {
	const dispatch = useDispatch()

	const onSubmit = (data: any) => {
		return dispatch(sendLogin(data.email, data.password) as any)
	}

	return (
		<section className="reglog">
			<img src={Logo} alt="2Jam" className="reglog__logo" />

			<LoginForm onSubmit={onSubmit} />
		</section>
	)
}

export default Login