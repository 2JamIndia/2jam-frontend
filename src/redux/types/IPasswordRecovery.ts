export interface PasswordRecoveryState {
	isSend: boolean
}

export enum PasswordRecoveryActionTypes {
	SET_PASSWORD_RECOVERY_IS_SEND = "SET_PASSWORD_RECOVERY_IS_SEND"
}

interface setPasswordRecoveryIsSend {
	type: PasswordRecoveryActionTypes.SET_PASSWORD_RECOVERY_IS_SEND,
	payload: boolean
}

export type PasswordRecoveryActions = setPasswordRecoveryIsSend