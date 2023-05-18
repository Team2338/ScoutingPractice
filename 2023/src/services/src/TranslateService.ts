import { useAppSelector } from '../../state';
import { IAppState, ILanguageTranslation, Language } from '../../models';

const translateKey = (language: string, key: string): string => {
	const mapping: ILanguageTranslation = languages[language];

	if (mapping.hasOwnProperty(key)) {
		return mapping[key];
	}

	return key;
};

type Translator = (key: string) => string;
export const useTranslator = (): Translator => {
	const language: string = useAppSelector((state: IAppState) => state.language);

	return (key: string) => translateKey(language, key);
};

const languages: ILanguageTranslation = {
	[Language.ENGLISH]: {
		"SIGN_IN": "Sign In",
		"USERNAME": "Username",
		"YOUR_TEAM_NUMBER": "Your team number",
		"TEAM_NUMBER": "Team number",
		"MATCH_NUMBER": "Match number",
		"EVENT_CODE": "Event code",
		"SECRET_CODE": "Secret code",
		"LANGUAGE": "Language",
		"LOGOUT": "Logout",
		"CHANGE_LANGUAGE": "Change language",
		"AUTO": "Auto",
		"TELEOP": "Teleop",
		"MOBILITY_2023": "Mobility",
		"CHARGE_STATION_2023": "Charge Station",
		"GRID_2023": "Grid",
		"RED_ALLIANCE": "Red alliance",
		"BLUE_ALLIANCE": "Blue alliance",
		"SUBMIT": "Submit",
		"GRID_HELPER_TEXT": "Press the button on the grid corresponding to where the robot placed a game piece"
	},
	[Language.SPANISH]: {
		"SIGN_IN": "Iniciar sesión",
		"USERNAME": "Nombre de usuario",
		"YOUR_TEAM_NUMBER": "Tu numero de equipo",
		"TEAM_NUMBER": "Numero de equipo",
		"MATCH_NUMBER": "Numero del partido",
		"EVENT_CODE": "Código del evento",
		"SECRET_CODE": "Código secreto",
		"LANGUAGE": "Lengua",
		"LOGOUT": "Cerrar sesión",
		"CHANGE_LANGUAGE": "Cambiar idioma",
		"AUTO": "Auto",
		"TELEOP": "Teleop",
		"MOBILITY_2023": "Mobilización",
		"CHARGE_STATION_2023": "Estación de Carga",
		"GRID_2023": "Portería",
		"RED_ALLIANCE": "Alianza roja",
		"BLUE_ALLIANCE": "Alianza azul",
		"SUBMIT": "Entregar",
		"GRID_HELPER_TEXT": "Presione el botón en la cuadrícula correspondiente a donde el robot coloca una pieza de juego"
	},
	[Language.FRENCH]: {
		"SIGN_IN": "Connexion",
		"USERNAME": "Nom d'utilisateur",
		"YOUR_TEAM_NUMBER": "Votre numéro d'équipe",
		"TEAM_NUMBER": "Numéro d'équipe",
		"MATCH_NUMBER": "Numéro de match",
		"EVENT_CODE": "Code de l'événement",
		"SECRET_CODE": "Code secret",
		"LANGUAGE": "Langue",
		"LOGOUT": "Se déconnecter",
		"CHANGE_LANGUAGE": "Changer de langue",
		"AUTO": "Auto",
		"TELEOP": "Téléop",
		"MOBILITY_2023": "Mobilité",
		"CHARGE_STATION_2023": "Station de Recharge",
		"GRID_2023": "Réseau",
		"RED_ALLIANCE": "Alliance rouge",
		"BLUE_ALLIANCE": "Alliance bleue",
		"SUBMIT": "Soumettre",
		"GRID_HELPER_TEXT": "Appuyez sur le bouton de la grille correspondant à l'endroit où le robot place une pièce de jeu"
	},
	[Language.TURKISH]: {
		"SIGN_IN": "Kayıt Olmak",
		"USERNAME": "Kullanıcı adı",
		"YOUR_TEAM_NUMBER": "Takım numaranız",
		"TEAM_NUMBER": "Takım numarası",
		"MATCH_NUMBER": "Maç numarası",
		"EVENT_CODE": "Etkinlik kodu",
		"SECRET_CODE": "Gizli kod",
		"LANGUAGE": "Dilim",
		"LOGOUT": "Çıkış Yap",
		"CHANGE_LANGUAGE": "Dili değiştir",
		"AUTO": "Otonom",
		"TELEOP": "Uzaktan Kontrol",
		"MOBILITY_2023": "Hareketli̇li̇k",
		"CHARGE_STATION_2023": "Şarj İstasyonu",
		"GRID_2023": "Şebeke",
		"RED_ALLIANCE": "kırmızı ittifak",
		"BLUE_ALLIANCE": "mavi ittifak",
		"SUBMIT": "Sunmak",
		"GRID_HELPER_TEXT": "Robotun bir oyun parçasını yerleştirdiği yere karşılık gelen ızgaradaki düğmeye basın"
	}
};
