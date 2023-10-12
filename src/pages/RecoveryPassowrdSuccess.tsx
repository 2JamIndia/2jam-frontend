import React from 'react'

import Logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';

const RecoveryPassowrdSuccess: React.FC = () => {
	return (
		<section className="reglog">
			<img src={Logo} alt="2Jam" className="reglog__logo" />

			<div className="reglog-text">
				<h2 className="reglog-text__title">
					Link sent
				</h2>

				<p className="reglog-text__subtitle">
					If you haven’t received it within 10 minutes, please check your spam folder!
				</p>

				<Link to="/go/password-recovery" className="btn reglog-text__btn">
					Send again
				</Link>
			</div>
		</section>
	)
}

export default RecoveryPassowrdSuccess