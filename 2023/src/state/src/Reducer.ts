import { IAppState, Language } from '../../models';
import { Action, ActionType } from './Actions';

const INITIAL_STATE: IAppState = {
	language: Language.ENGLISH,
	login: {
		isLoggedIn: false,
		teamNumber: null,
		username: null,
		eventCode: null,
		secretCode: null
	}
};

export const reducer = (state: IAppState = INITIAL_STATE, action: Action): IAppState => {
	switch (action.type) {
		case ActionType.SELECT_LANG:
			return {
				...state,
				language: action.payload
			};
		case ActionType.LOGIN_SUCCESS:
			return {
				...state,
				login: {
					...action.payload,
					isLoggedIn: true
				}
			};
		default:
			return state;
	}
};
