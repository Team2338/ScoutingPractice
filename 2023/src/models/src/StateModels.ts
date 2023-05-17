import { Language } from './LanguageModels';
import { AllianceColor } from './DataModels';

export interface IAppState {
	language: Language;
	login: ILoginState;
	match: IMatchState;
}

export interface ILoginState {
	isLoggedIn: boolean;
	teamNumber: string;
	username: string;
	eventCode: string;
	secretCode: string;
}

export enum Gamemode {
	auto = 'auto',
	teleop = 'teleop'
}

export interface IMatchState {
	matchNumber: string;
	robotNumber: string;
	allianceColor: AllianceColor;
	[Gamemode.auto]: {
		grid: number[];
	};
	[Gamemode.teleop]: {
		grid: number[];
	};
}
