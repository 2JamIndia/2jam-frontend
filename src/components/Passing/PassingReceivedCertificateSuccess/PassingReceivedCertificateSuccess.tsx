import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

interface PassingReceivedCertificateSuccessProps {
	certificateUrl: string
}

const PassingReceivedCertificateSuccess: React.FC<PassingReceivedCertificateSuccessProps> = ({ certificateUrl }) => {
	const cardX = useMotionValue(0);
	const cardY = useMotionValue(0);

	const rotateX = useTransform(cardY, [-1600, 1600], [10, -10]);
	const rotateY = useTransform(cardX, [-1600, 1600], [-10, 10]);

	const handleMouseMove = (event: any) => {
		const offsetX = event.clientX - window.innerWidth / 2;
		const offsetY = event.clientY - window.innerHeight / 2

		cardX.set(offsetX);
		cardY.set(offsetY);
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			className="passing-certificate-success"
			id="passing-certificate"
		>
			<div className="passing-certificate-success-text">
				<h2 className="passing-certificate-success-text__title">
					Your certificate
				</h2>

				<a href={certificateUrl} target="_blank" download="Certificate" className="btn gray passing-certificate-success-text__btn">
					Download

					<svg viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.6667 1L12.6667 24.3333M12.6667 24.3333L1 12.6666M12.6667 24.3333L24.3333 12.6666" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M1.00012 30L12.5001 30L24.3335 30" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</a>
			</div>

			<motion.div
				style={{
					margin: "auto",
					width: "100%",
					height: "100%",
					transformStyle: "preserve-3d",
					perspective: 800,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					rotateX,
					rotateY
				}}
				transition={{ velocity: 0 }}
			>
				<motion.div
					key="card"
					style={{
						transformStyle: "preserve-3d",
						perspective: 800,
						rotateX,
						rotateY
					}}
					transition={{ velocity: 0 }}
					className="passing-certificate-success-image"
				>
					<img src={certificateUrl} alt="" className="passing-certificate-success-image__image" />
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default PassingReceivedCertificateSuccess