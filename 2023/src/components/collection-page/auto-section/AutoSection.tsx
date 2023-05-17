import { Typography } from '@mui/material';
import { useTranslator } from '../../../services';
import Grid from '../grid/Grid';
import { Gamemode } from '../../../models';

export default function AutoSection() {
	const translate = useTranslator();

	return (
		<section className="auto-section">
			<Typography variant="h2">{ translate('AUTO') }</Typography>
			{/* TODO: Nullify button	*/ }
			{/*	TODO: Mobility */ }
			{/*	TODO: Charge station*/ }
			{/*	TODO: Grid */ }
			<Grid gamemode={ Gamemode.auto }/>
		</section>
	);
}
