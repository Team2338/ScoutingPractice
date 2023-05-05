import { Language } from '../../models';
import { ILoginInfo } from '../../models/src/DataModels';

export interface Action {
	type: ActionType;
	payload?: any;
}

export enum ActionType {
	SELECT_LANG = '[LANG] Selected language',
	LOGIN_SUCCESS = '[LOGIN] Login success'
}


export const selectLang = (language: Language): Action => ({
	type: ActionType.SELECT_LANG,
	payload: language
});

export const loginSuccess = (loginData: ILoginInfo): Action => ({
	type: ActionType.LOGIN_SUCCESS,
	payload: loginData
});
