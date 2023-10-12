import { PassingCourse } from "../../models/IPassing";

export interface PassingState {
	course: PassingCourse;
	isLoadedCourse: boolean;
	isDownloadingMaterial: boolean
}

export enum PassingActionTypes {
	SET_PASSING_COURSE = "SET_PASSING_COURSE",
	SET_PASSING_IS_LOADED_COURSE = "SET_PASSING_IS_LOADED_COURSE",
	SET_PASSING_IS_DOWNLOADING_MATERIAL = "SET_PASSING_IS_DOWNLOADING_MATERIAL",
}

interface setPassingCourse {
	type: PassingActionTypes.SET_PASSING_COURSE;
	payload: PassingCourse;
}

interface setPassingIsLoadedCourse {
	type: PassingActionTypes.SET_PASSING_IS_LOADED_COURSE;
	payload: boolean;
}

interface setPassingIsDownloadingMaterial {
	type: PassingActionTypes.SET_PASSING_IS_DOWNLOADING_MATERIAL;
	payload: boolean;
}

export type PassingActions =
	| setPassingCourse
	| setPassingIsLoadedCourse
	| setPassingIsDownloadingMaterial
