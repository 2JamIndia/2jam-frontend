import React from "react";
import { Helmet } from "react-helmet";

import { TrainingBlock } from "../components/";

import { useTypedSelector } from "../hooks/useTypedSelector";

import { checkDeclension } from "../functions/checkDeclension";

const Training: React.FC = () => {
	const { user } = useTypedSelector(({ user }) => user);

	return (
		<>
			<Helmet>
				<title>
					My learning | 2Jam
				</title>
			</Helmet>

			<section className="training">
				<div className="container">
					<div className="training-wrapper">
						<h3 className="training__subtitle">Welcome back!</h3>
						<h3 className="training__title">My learning</h3>

						<div className="training-blocks-wrapper">
							{user.courses.map((course, index) => (
								<TrainingBlock
									{...course}
									completedLessonsTitle={
										checkDeclension(course.completedLessons.length, [
											"lesson",
											"lesson",
											"lessons",
										]).title
									}
									key={`training-block-${index}`}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Training;
