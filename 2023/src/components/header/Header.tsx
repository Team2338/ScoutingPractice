import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LanguageSelector from '../language-selector/LanguageSelector';

export default function Header() {

	return (
		<AppBar id="app-bar" position="sticky" color="primary">
			<Toolbar>
				<Typography
					variant="h5"
					color="inherit"
					lang="en"
					translate="no"
					noWrap
				>
					GearScout
				</Typography>
				<LanguageSelector
					sx={{
						marginLeft: 'auto'
					}}
				/>
			</Toolbar>
		</AppBar>
	);
}
