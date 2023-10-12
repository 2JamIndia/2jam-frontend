import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import login from './login'
import user from './user'
import passing from './passing'
import password_recovery from './password_recovery'

export const rootReducer = combineReducers({
	login,
	user,
	passing,
	password_recovery,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>