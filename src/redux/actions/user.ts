import { Dispatch } from 'redux'

import $api from '../../http/'

import { User } from '../../models/IUser'

import { UserActions, UserActionTypes } from '../types/IUser'

export const fetchUser = () => async (dispatch: Dispatch<UserActions>) => {
	const { data } = await $api.get<User>("/my/info")

	dispatch(({
		type: UserActionTypes.SET_USER,
		payload: data
	}))
};

export const updateUser = (body: { name: string, surname: string }) => async (dispatch: Dispatch<UserActions>) => {
	dispatch(({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: true
	}))

	const { data } = await $api.post<User>("/my/info", body)


	dispatch(({
		type: UserActionTypes.SET_USER,
		payload: data
	}))

	dispatch(({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: false
	}))
};

export const generateCertificate = (courseId: string, feedback: string) => async (dispatch: Dispatch<UserActions>) => {
	dispatch(({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: true
	}))

	const { data } = await $api.post<User>("/my/generate-certificate", { courseId, feedback })

	dispatch(({
		type: UserActionTypes.SET_USER,
		payload: data
	}))

	dispatch(({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: false
	}))
};
