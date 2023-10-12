import { Dispatch } from 'redux'
import { SubmissionError } from 'redux-form'

import $api from '../../http/'

import { PasswordRecoveryActions, PasswordRecoveryActionTypes } from '../types/IPasswordRecovery'

export const sendPasswordRecovery = (email: string) => {
	return async (dispatch: Dispatch<PasswordRecoveryActions>) => {
		dispatch({
			type: PasswordRecoveryActionTypes.SET_PASSWORD_RECOVERY_IS_SEND,
			payload: true,
		});

		return $api.post("/password-recovery", { email }).then(({ data }) => {
			window.location.href = "/go/password-recovery/success"
		}).catch(({ response }) => {
			dispatch({
				type: PasswordRecoveryActionTypes.SET_PASSWORD_RECOVERY_IS_SEND,
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

export const sendPasswordRecoveryConfirm = (password: string, hash: string) => {
	return async (dispatch: Dispatch<PasswordRecoveryActions>) => {
		dispatch({
			type: PasswordRecoveryActionTypes.SET_PASSWORD_RECOVERY_IS_SEND,
			payload: true,
		});

		return $api.post("/password-recovery-confirm", { password, hash }).then(({ data }) => {
			localStorage.setItem("accessToken", data.accessToken)

			window.location.href = "/go/training"
		}).catch(({ response }) => {
			dispatch({
				type: PasswordRecoveryActionTypes.SET_PASSWORD_RECOVERY_IS_SEND,
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