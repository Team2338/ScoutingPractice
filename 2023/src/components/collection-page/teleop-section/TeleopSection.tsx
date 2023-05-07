import { Typography } from '@mui/material';
import { useTranslator } from '../../../services';
import Grid from '../grid/Grid';
import React from 'react';

export default function TeleopSection() {
	const translate = useTranslator();

	return (
		<section className="teleop-section">
			<Typography variant="h2">{ translate('TELEOP') }</Typography>
			{/* TODO: Nullify button	*/ }
			{/*	TODO: Charge station*/ }
			{/*	TODO: Grid */ }
			<Grid />
		</section>
	);
}
