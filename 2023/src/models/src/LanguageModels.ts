export enum Language {
	ENGLISH = 'english',
	SPANISH = 'spanish'
}

export interface LanguageDescriptor {
	key: Language;
	code: string;
	localName: string;
	englishName: string;
}

type ILanguageInfo = {
	[key in Language]: LanguageDescriptor;
};

export const LanguageInfo: ILanguageInfo = {
	[Language.ENGLISH]: {
		key: Language.ENGLISH,
		code: 'en',
		localName: 'English',
		englishName: 'English'
	},
	[Language.SPANISH]: {
		key: Language.SPANISH,
		code: 'es',
		localName: 'Español',
		englishName: 'Spanish'
	}
};
