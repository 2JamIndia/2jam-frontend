import React from 'react'
import { Link } from 'react-router-dom'

import { PassingCourseLesson } from '../../../../models/IPassing'

interface PassingNavigationLessonsItemProps extends PassingCourseLesson {
	courseId: string
	number: number
	totalCountLessons: number
	isActive: boolean
	setState: () => void
}

const PassingNavigationLessonsItem: React.FC<PassingNavigationLessonsItemProps> = ({ image, title, number, totalCountLessons, isActive, courseId, setState }) => {
	return (
		<Link to={`/go/passing/${courseId}/${number}`} className={`passing-navigation-lessons-list-item ${isActive ? "active" : ""}`} onClick={setState}>
			<div className="passing-navigation-lessons-list-item-cover" style={{ backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_512}')` }}>
				{number === totalCountLessons ? (
					<span className="passing-navigation-lessons-list-item-cover__info certificate">
						Certificate
					</span>
				) : null}
			</div>

			<div className="passing-navigation-lessons-list-item-text">
				<p className="passing-navigation-lessons-list-item-text__subtitle">
					Lesson {number}
				</p>

				<h3 className="passing-navigation-lessons-list-item-text__title">
					{title}
				</h3>
			</div>
		</Link>
	)
}

export default PassingNavigationLessonsItem