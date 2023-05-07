import React from 'react';
import { Button } from '@mui/material';
import { useTranslator } from '../../services';
import AllianceSelector from './alliance-selector/AllianceSelector';
import MatchInformation from './match-information/MatchInformation';
import AutoSection from './auto-section/AutoSection';
import TeleopSection from './teleop-section/TeleopSection';
import './CollectionPage.scss';

export default function CollectionPage() {
	const translate = useTranslator();

	const submit = (): void => {
	};

	return (
		<div className="page collection-page">
			<MatchInformation />
			<AllianceSelector />
			<AutoSection />
			<TeleopSection />
			<Button
				variant="contained"
				onClick={ submit }
			>
				{ translate('SUBMIT') }
			</Button>
		</div>
	);
}
