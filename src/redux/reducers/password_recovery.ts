import { PasswordRecoveryState, PasswordRecoveryActions, PasswordRecoveryActionTypes } from '../types/IPasswordRecovery'

const initialState: PasswordRecoveryState = {
	isSend: false
}

const password_recovery = (state = initialState, action: PasswordRecoveryActions) => {
	if (action.type === PasswordRecoveryActionTypes.SET_PASSWORD_RECOVERY_IS_SEND) {
		return {
			...state,
			isSend: action.payload
		}
	}

	return state
}

export default password_recovery