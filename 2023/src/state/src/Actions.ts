import { Gamemode, Language } from '../../models';
import { ILoginInfo } from '../../models/src/DataModels';

export interface Action {
	type: ActionType;
	payload?: any;
}

export enum ActionType {
	SELECT_LANG = '[LANG] Selected language',
	LOGIN_SUCCESS = '[LOGIN] Login success',
	ACTIVATE_AUTO_NODE = '[MATCH] Activate auto node',
	ACTIVATE_TELEOP_NODE = '[MATCH] Activate teleop node'
}


export const selectLanguage = (language: Language): Action => ({
	type: ActionType.SELECT_LANG,
	payload: language
});

export const login = (loginData: ILoginInfo): Action => ({
	type: ActionType.LOGIN_SUCCESS,
	payload: loginData
});

export const activateNode = (gamemode: Gamemode, index: number): Action => {
	const type: ActionType = (gamemode === Gamemode.teleop) ? ActionType.ACTIVATE_TELEOP_NODE : ActionType.ACTIVATE_AUTO_NODE;
	return {
		type: type,
		payload: index
	};
};
