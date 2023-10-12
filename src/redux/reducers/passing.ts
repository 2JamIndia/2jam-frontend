import { PassingState, PassingActions, PassingActionTypes } from '../types/IPassing'

const initialState: PassingState = {
	course: {
		_id: "",
		title: "",
		image: {
			size_512: "",
			size_768: "",
			size_1024: "",
			size_1536: "",
			size_2048: ""
		},
		description: "",
		masterName: "",
		completedLessons: [],

		lessons: []
	},
	isLoadedCourse: false,

	isDownloadingMaterial: false
};

const passing = (state = initialState, action: PassingActions) => {
	if (action.type === PassingActionTypes.SET_PASSING_COURSE) {
		return {
			...state,
			course: action.payload,
			isLoadedCourse: true
		}
	}

	if (action.type === PassingActionTypes.SET_PASSING_IS_LOADED_COURSE) {
		return {
			...state,
			isLoadedCourse: action.payload
		}
	}

	if (action.type === PassingActionTypes.SET_PASSING_IS_DOWNLOADING_MATERIAL) {
		return {
			...state,
			isDownloadingMaterial: action.payload
		}
	}

	return state
};

export default passing;
