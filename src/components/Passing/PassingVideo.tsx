import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import $api from "../../http/";

import { VideoPlayer } from "../";

interface PassingVideoProps {
	courseId: string;
	lessonNum: number;
	totalLessonsCount: number;
	image: string;
}

const PassingVideo: React.FC<PassingVideoProps> = ({
	courseId,
	lessonNum,
	totalLessonsCount,
	image,
}) => {
	const dispatch = useDispatch();

	const [play, setPlay] = React.useState(false);
	const [duration, setDuration] = React.useState(0);

	const callbackError = (e: any, data: any, VideoRef: any) => {
		const seconds = VideoRef.current && VideoRef.current.getSecondsLoaded();

		if (data && data.type == "networkError") {
			try {
				setPlay(false);

				$api.get(`/refresh`)
					.then(({ data }) => {
						localStorage.setItem("accessToken", data.accessToken);

						setPlay(true);

						VideoRef.current.seekTo(seconds, "seconds");
					})
					.catch(() => {
						$api.post("/logout").then(() => {
							localStorage.removeItem("accessToken");
							window.location.reload();
						});
					});
			} catch (e) {
				window.location.reload();
			}
		}
	};

	const callbackPause = () => {
		setPlay(false);
	};

	const callbackDuration = ({ playedSeconds }: { playedSeconds: number }) => {
		setDuration(Math.floor(playedSeconds));
	};

	return (
		<div className="passing-video-wrapper">
			<Link to={`/go/passing/${courseId}/${lessonNum - 1}`} className={`passing-video__btn ${lessonNum === 1 ? "disabled" : ""} prev`}>
				<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24.3333 12.6667L0.999918 12.6667M0.999918 12.6667L12.6666 1M0.999918 12.6667L12.6666 24.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</Link>

			<div className="passing-video">
				<VideoPlayer
					url={`${process.env.REACT_APP_API_DOMEN
						}/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
							"accessToken"
						)}/playlist.m3u8`}
					image={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
					play={play}
					setPlay={setPlay}
					callbackError={callbackError}
					callbackPause={callbackPause}
					callbackDuration={callbackDuration}
				/>
			</div>

			<Link to={`/go/passing/${courseId}/${lessonNum + 1}`} className={`passing-video__btn ${lessonNum === totalLessonsCount ? "disabled" : ""} next`}>
				<svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 12.6667L24.3333 12.6667M24.3333 12.6667L12.6666 1M24.3333 12.6667L12.6666 24.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</Link>
		</div>
	);
};

export default PassingVideo;
