import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FooterEmail } from '../'

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-block">
						<FooterEmail title="Support" email="hello@2jam.in" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
