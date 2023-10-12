import { User } from '../../models/IUser'

export interface UserState {
	user: User
	isLoaded: boolean
	isSending: boolean
}

export enum UserActionTypes {
	SET_USER = "SET_USER",
	SET_USER_IS_SENDING = "SET_USER_IS_SENDING"
}

interface setUser {
	type: UserActionTypes.SET_USER,
	payload: User
}

interface setUserIsSending {
	type: UserActionTypes.SET_USER_IS_SENDING,
	payload: boolean
}

export type UserActions = setUser | setUserIsSending