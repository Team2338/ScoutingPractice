import React, { ReactElement, useState } from 'react';
import { selectLanguage, useAppDispatch, useAppSelector } from '../../state';
import { Language, LanguageDescriptor, LanguageInfo } from '../../models';
import { useTranslator } from '../../services';
import { Button, Icon, Menu, MenuItem, Tooltip } from '@mui/material';
import './LanguageSelector.scss';


interface IProps {
	sx?: any;
}

export default function LanguageSelector(props: IProps) {

	const dispatch = useAppDispatch();
	const translate = useTranslator();
	const selectedLanguage: Language = useAppSelector(state => state.language);
	const [languageAnchor, setLanguageAnchor] = useState(null);

	const handleLanguageMenuClick = (event): void => {
		setLanguageAnchor(event.currentTarget);
	};

	const handleLanguageMenuClose = (): void => {
		setLanguageAnchor(null);
	};

	const handleLanguageChange = (language: Language): void => {
		dispatch(selectLanguage(language));
		handleLanguageMenuClose();
	};

	const languageOptions: ReactElement[] = Object.values(LanguageInfo)
		.map((info: LanguageDescriptor) => (
			<MenuItem
				key={ info.key }
				lang={ info.code }
				translate="no"
				selected={ selectedLanguage === info.key }
				onClick={ () => handleLanguageChange(info.key) }
			>
				{ info.localName }
			</MenuItem>
		));

	return (
		<React.Fragment>
			<Tooltip title={ translate('CHANGE_LANGUAGE') }>
				<Button
					className="language-button"
					color="primary"
					variant="contained"
					disableElevation={ true }
					startIcon={ <Icon>language</Icon> }
					onClick={ handleLanguageMenuClick }
					aria-label={ translate('CHANGE_LANGUAGE') }
					aria-controls="language-menu"
					aria-haspopup="true"
					sx={props.sx}
				>
					{ translate('LANGUAGE') }
				</Button>
			</Tooltip>
			<Menu
				id="language-menu"
				anchorEl={ languageAnchor }
				open={ Boolean(languageAnchor) }
				onClose={ handleLanguageMenuClose }
				keepMounted
			>
				{ languageOptions }
			</Menu>
		</React.Fragment>
	);
}
