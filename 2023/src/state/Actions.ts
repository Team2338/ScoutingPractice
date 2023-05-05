import { Language } from '../models';

export interface Action {
	type: ActionType;
	payload?: any;
}

export enum ActionType {
	SELECT_LANG = '[LANG] Selected language'
}


export const selectLang = (language: Language): Action => ({
	type: ActionType.SELECT_LANG,
	payload: language
});
