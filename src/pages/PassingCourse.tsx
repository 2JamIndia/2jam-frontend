import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";

import { useTypedSelector } from "../hooks/useTypedSelector";

import {
	fetchPassingCourseById,
	fetchPassingCourseLessonMaterial,
} from "../redux/actions/passing";

import {
	PassingNavigation,
	PassingVideo,
	PassingMaterials,
	PassingReceiveCertificate,
	PassingFeedback,
	PassingReceivedCertificateSuccess
} from "../components/";

const PassingCourse: React.FC = () => {
	const dispatch = useDispatch();

	const { id, num } = useParams();

	const courseId = id ? id : "";
	const lessonNum = num ? parseInt(num) : 1;

	const { isLoaded, isSending, user } = useTypedSelector(({ user }) => user);
	const { course, isLoadedCourse } = useTypedSelector(({ passing }) => passing);

	const [certificateUrl, setCertificateUrl] = React.useState<string>("")
	const [visibleButtonCertificate, setVisibleButtonCertificate] = React.useState(true);

	// Array of lessons starts at zero
	const lessonIndex = lessonNum - 1;

	React.useEffect(() => {
		if (isLoaded) {
			dispatch(fetchPassingCourseById(courseId) as any);
		}
	}, [isLoaded, courseId]);

	React.useEffect(() => {
		scroll.scrollToTop({ duration: 500 });
	}, [courseId, lessonNum, isLoaded]);

	React.useEffect(() => {
		if (isLoaded && !isSending) {
			user.courses.map(userCourse => {
				if (userCourse.courseId === id && userCourse.certificate !== "") {
					setCertificateUrl(userCourse.certificate)
				}
			})
		}
	}, [isLoaded, isSending]);

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
			setVisibleButtonCertificate(true);
		} else {
			setVisibleButtonCertificate(false);
		}
	};

	const downloadFile = (title: string, index: number) => {
		dispatch(
			fetchPassingCourseLessonMaterial(courseId, lessonNum, index, title) as any
		);
	};

	return (
		<>
			{localStorage.getItem("accessToken") ? (
				isLoadedCourse && isLoaded ? (
					<>
						<Helmet>
							<title>
								{course.lessons[lessonIndex].title} | {course.masterName} | 2Jam
							</title>
						</Helmet>

						<section className="passing">
							<div className="passing-wrapper">
								<div className="container" style={{ position: "static" }}>
									<div className="passing-navigation-wrapper">
										<PassingNavigation />
									</div>
								</div>

								<PassingVideo
									{...course}
									image={
										course.lessons[lessonIndex].image
											.size_2048
									}
									courseId={courseId}
									lessonNum={lessonNum}
									totalLessonsCount={course.lessons.length}
								/>

								<div className="container" style={{ position: "static" }}>
									<div className="passing-info-wrapper">
										<div className="passing-info">
											{course.lessons[lessonIndex].description !== "" ? (
												<p className="passing-info__description">
													{course.lessons[lessonIndex].description}
												</p>
											) : null}

											{course.lessons[lessonIndex].materials
												.length ? (
												<PassingMaterials
													materials={
														course.lessons[lessonIndex]
															.materials
													}
													downloadFunc={downloadFile}
												/>
											) : null}
										</div>

										{lessonNum === course.lessons.length ? (
											<>
												<LinkScroll
													to="passing-certificate"
													spy={true}
													smooth={true}
													offset={0}
													duration={1000}
												>
													<button className={`btn gray passing-certificate__btn ${visibleButtonCertificate ? "visible" : ""}`}>
														Certificate

														<svg viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M24.3334 1.66663L12.6667 13.3333L1.00004 1.66663" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</button>
												</LinkScroll>

												{user.name !== "" && user.surname !== "" ? (
													certificateUrl !== "" ? (
														<PassingReceivedCertificateSuccess certificateUrl={`${process.env.REACT_APP_IMAGE_DOMEN}/${certificateUrl}`} />
													) : (
														<PassingFeedback />
													)
												) : (
													<PassingReceiveCertificate />
												)}
											</>
										) : null}
									</div>
								</div>
							</div>
						</section>
					</>
				) : (
					// <Loader />
					null
				)
			) : (
				<Navigate to="/go/login" />
			)}
		</>
	);
};

export default PassingCourse;
