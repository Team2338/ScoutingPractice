import { Gamemode, IAppState, IMatchState, Language } from '../../models';
import { Action, ActionType } from './Actions';
import { AllianceColor } from '../../models/src/DataModels';

function generateNodeStates(): number[] {
	const states: number[] = [];
	for (let i = 0; i < 27; i++) {
		states.push(0);
	}
	return states;
}

const INITIAL_STATE: IAppState = {
	language: Language.ENGLISH,
	login: {
		isLoggedIn: false,
		teamNumber: null,
		username: null,
		eventCode: null,
		secretCode: null
	},
	match: {
		matchNumber: '',
		robotNumber: '',
		allianceColor: AllianceColor.unknown,
		[Gamemode.auto]: {
			grid: generateNodeStates()
		},
		[Gamemode.teleop]: {
			grid: generateNodeStates()
		}
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
		case ActionType.ACTIVATE_AUTO_NODE:
			return {
				...state,
				match: handleActivateAutoNode(state.match, action.payload)
			};
		case ActionType.ACTIVATE_TELEOP_NODE:
			return {
				...state,
				match: handleActivateTeleopNode(state.match, action.payload)
			};
		default:
			return state;
	}
};

function handleActivateAutoNode(match: IMatchState, index: number): IMatchState {
	const autoGrid: number[] = match.auto.grid.slice(); // Slice to copy
	autoGrid[index] = (match.auto.grid[index] + 1) % 2;

	return {
		...match,
		[Gamemode.auto]: {
			...match.auto,
			grid: autoGrid
		}
	};
}

function handleActivateTeleopNode(match: IMatchState, index: number): IMatchState {
	const teleopGrid: number[] = match.teleop.grid.slice(); // Slice to copy
	const numAutoPieces: number = match.auto.grid[index];
	const maxTeleopPieces: number = 2 - numAutoPieces;
	const currentTeleopPieces: number = teleopGrid[index];

	teleopGrid[index] = (currentTeleopPieces + 1) % (maxTeleopPieces + 1);

	return {
		...match,
		[Gamemode.teleop]: {
			...match.teleop,
			grid: teleopGrid
		}
	};
}
