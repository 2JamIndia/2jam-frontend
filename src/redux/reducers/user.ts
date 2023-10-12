import { UserState, UserActions, UserActionTypes } from '../types/IUser'

const initialState: UserState = {
	user: {
		_id: "",

		email: "",
		name: "",
		surname: "",
		courses: []
	},
	isLoaded: false,
	isSending: false
}

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER) {
		return {
			...state,
			user: action.payload,
			isLoaded: true
		}
	}

	if (action.type === UserActionTypes.SET_USER_IS_SENDING) {
		return {
			...state,
			isSending: action.payload
		}
	}

	return state
}

export default user