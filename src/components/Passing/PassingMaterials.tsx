import React from "react";
import { Link as LinkScroll } from "react-scroll";

import { PassingMaterialsItem } from "../";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { PassingCourseLessonMaterial } from "../../models/IPassing";

interface PassingMaterialsProps {
	materials: PassingCourseLessonMaterial[];
	downloadFunc: (title: string, index: number) => void;
}

const PassingMaterials: React.FC<PassingMaterialsProps> = ({
	materials,
	downloadFunc,
}) => {
	const { isDownloadingMaterial } = useTypedSelector(({ passing }) => passing)
	
	const [visibleButton, setVisibleButton] = React.useState(true);

	React.useEffect(() => {
		handlerScroll()

		window.addEventListener("scroll", handlerScroll);
	}, []);

	React.useEffect(() => {
		return () => {
			window.removeEventListener("scroll", handlerScroll);
		};
	}, []);

	const handlerScroll = () => {
		if (Math.floor(window.pageYOffset) < 200) {
			setVisibleButton(true);
		} else {
			setVisibleButton(false);
		}
	};

	return (
		<div className="passing-info-materials">
			<LinkScroll
				to="passing-materials"
				spy={true}
				smooth={true}
				offset={0}
				duration={1000}
			>
				<button className={`btn gray passing-info-materials__btn ${visibleButton ? "visible" : ""}`}>
				Materials

					<svg viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.3334 1.66663L12.6667 13.3333L1.00004 1.66663" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</LinkScroll>


			<h4 className="passing-info-materials__title">
				Materials for the lesson
			</h4>

			<div className="passing-info-materials-items-wrapper" id="passing-materials">
				{materials.map((item, index) => (
					<PassingMaterialsItem
						{...item}
						index={index}
						downloadFile={downloadFunc}
						isDownloading={isDownloadingMaterial}
						key={`passing-info-materials-item-${index}`}
					/>
				))}
			</div>
		</div>
	);
};

export default PassingMaterials;
