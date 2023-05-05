import { Language } from './LanguageModels';

export interface IAppState {
	language: Language;
	login: ILoginState;
}

export interface ILoginState {
	isLoggedIn: boolean;
	teamNumber: string;
	username: string;
	eventCode: string;
	secretCode: string;
}
