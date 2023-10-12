import React from 'react'

interface PassingNavigationTitleProps {
	courseTitle: string
	lessonTitle: string
	openLessonsList: () => void
}

const PassingNavigationTitle: React.FC<PassingNavigationTitleProps> = ({ courseTitle, lessonTitle, openLessonsList }) => {
	return (
		<div className="passing-navigation-text">
			<p className="passing-navigation-text__subtitle">
				{courseTitle}
			</p>

			<div className="passing-navigation-text-title">
				<h2 className="passing-navigation-text-title__title">
					{lessonTitle}
				</h2>

				<button className="passing-navigation-text-title__btn" onClick={openLessonsList}>
					Lessons

					<svg viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.3334 1.66663L12.6667 13.3333L1.00004 1.66663" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default PassingNavigationTitle