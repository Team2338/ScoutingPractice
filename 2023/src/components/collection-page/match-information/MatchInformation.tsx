import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslator } from '../../../services';
import './MatchInformation.scss';

export default function MatchInformation() {
	const translate = useTranslator();
	const [matchNumber, setMatchNumber] = useState('');
	const [robotNumber, setRobotNumber] = useState('');

	return (
		<div className="match-information">
			<TextField
				id="match-number-input"
				label={ translate('MATCH_NUMBER') }
				name="matchNumber"
				type="number"
				margin="normal"
				variant="outlined"
				value={ matchNumber }
				onChange={ (event) => setMatchNumber(event.target.value) }
				InputProps={ {
					startAdornment: <InputAdornment position="start">#</InputAdornment>
				} }
				inputProps={{
					min: 0,
					max: 9999
				}}
				autoComplete="off"
				autoFocus={ true }
			/>
			<TextField
				id="robot-number-input"
				label={ translate('TEAM_NUMBER') }
				name="robotNumber"
				type="number"
				margin="normal"
				variant="outlined"
				value={ robotNumber }
				onChange={ (event) => setRobotNumber(event.target.value) }
				InputProps={ {
					startAdornment: <InputAdornment position="start">#</InputAdornment>
				} }
				inputProps={ {
					min: 0,
					max: 9999
				} }
				autoComplete="off"
				autoFocus={ true }
			/>
		</div>
	);
}
