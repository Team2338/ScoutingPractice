import { IAppState, Language } from '../models';
import { Action, ActionType } from './Actions';

const INITIAL_STATE: IAppState = {
	language: Language.ENGLISH
};

export const reducer = (state: IAppState = INITIAL_STATE, action: Action): IAppState => {
	switch (action.type) {
		case ActionType.SELECT_LANG:
			return {
				...state,
				language: action.payload
			};
		default:
			return state;
	}
}
