import React from 'react'
import { useParams } from "react-router-dom";

import { useTypedSelector } from '../../../../hooks/useTypedSelector'

import { PassingNavigationLessonsListItem } from '../../../'

interface PassingNavigationLessonsListProps {
	state: boolean
	setState: () => void
}

const PassingNavigationLessonsList: React.FC<PassingNavigationLessonsListProps> = ({ state, setState }) => {
	const { id, num } = useParams();

	const { course: { lessons } } = useTypedSelector(({ passing }) => passing);

	const PopupRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (state) {
			document.body.style.overflowY = "hidden"
		} else {
			document.body.style.overflowY = "scroll"
		}
	}, [state])

	React.useEffect(() => {
		if (state) {
			document.addEventListener("mousedown", togglePopup);
			document.addEventListener("touchstart", togglePopup);
		}

		return () => {
			document.removeEventListener("mousedown", togglePopup);
			document.removeEventListener("touchstart", togglePopup);
		};
	}, [PopupRef, state]);

	const togglePopup = (e: any) => {
		if (PopupRef.current && !PopupRef.current.contains(e.target)) {
			if (setState) setState();
		}
	};

	return (
		<div className={`passing-navigation-lessons-list-wrapper ${state ? "active" : ""}`}>
			<button className="passing-navigation-lessons-list__close">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.00003 14L14 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M14 14L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</button>

			<div className={`passing-navigation-lessons-list ${state ? "active" : ""}`} ref={PopupRef}>
				{lessons.map((lesson, index) => (
					<PassingNavigationLessonsListItem
						{...lesson}
						key={`passing-navigation-lessons-list-lesson-${index}`}
						courseId={id as string}
						number={index + 1} isActive={parseInt(num as string) === index + 1}
						totalCountLessons={lessons.length}
						setState={setState}
					/>
				))}
			</div>
		</div>
	)
}

export default PassingNavigationLessonsList