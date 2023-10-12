import { Dispatch } from 'redux'
import { SubmissionError } from 'redux-form'

import $api from '../../http/'

import { LoginActions, LoginActionTypes } from '../types/ILogin'

export const sendLogin = (email: string, password: string) => {
	return async (dispatch: Dispatch<LoginActions>) => {
		dispatch({
			type: LoginActionTypes.SET_LOGIN_IS_SEND,
			payload: true,
		});

		return $api.post("/login", { email, password }).then(({ data }) => {
			localStorage.setItem("accessToken", data.accessToken)

			window.location.href = "/go/training"
		}).catch(({ response }) => {
			dispatch({
				type: LoginActionTypes.SET_LOGIN_IS_SEND,
				payload: false,
			});

			if (response) {
				throw new SubmissionError({
					[response.data.fieldError]: response.data.message,
				});
			}
		});
	};
}