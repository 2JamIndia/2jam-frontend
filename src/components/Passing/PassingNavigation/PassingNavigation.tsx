import React from 'react'
import { useParams } from "react-router-dom";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { PassingNavigationTitle, PassingNavigationLessonsList } from '../../'

const PassingNavigation: React.FC = () => {
	const { num } = useParams();

	const { course } = useTypedSelector(({ passing }) => passing);

	const [stateLessonsList, setStateLessonsList] = React.useState<boolean>(false)

	const toggleState = () => {
		setStateLessonsList(!stateLessonsList)
	}

	return (
		<div className='passing-navigation'>
			<PassingNavigationTitle courseTitle={course.title} lessonTitle={course.lessons[parseInt(num as string) - 1].title} openLessonsList={toggleState} />

			<PassingNavigationLessonsList state={stateLessonsList} setState={toggleState} />
		</div>
	)
}

export default PassingNavigation