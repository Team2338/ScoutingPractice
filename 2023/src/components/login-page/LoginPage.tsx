import React, { useState } from 'react';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useTranslator } from '../../services';
import { login, useAppDispatch } from '../../state';
import './LoginPage.scss';

export default function LoginPage() {

	const dispatch = useAppDispatch();
	const translate = useTranslator();
	const [teamNumber, setTeamNumber] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [eventCode, setEventCode] = useState<string>('');
	const [secretCode, setSecretCode] = useState<string>('');


	const handleSubmit = (event): void => {
		event.preventDefault();

		dispatch(login({
			teamNumber: teamNumber,
			username: username,
			eventCode: eventCode,
			secretCode: secretCode
		}));
	};

	const isValid = (): boolean => {
		return !!teamNumber && !!username && !!eventCode && !!secretCode;
	};

	return (
		<div className="page login-page">
			<form className="login-page-form" onSubmit={ handleSubmit }>
				<Typography variant="h4">{ translate('SIGN_IN') }</Typography>
				<TextField
					id="team-number-input"
					label={ translate('YOUR_TEAM_NUMBER') }
					name="teamNumber"
					type="number"
					margin="dense"
					variant="outlined"
					value={ teamNumber }
					onChange={ (event) => setTeamNumber(event.target.value) }
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
				<TextField
					id="username-input"
					label={ translate('USERNAME') }
					name="username"
					type="text"
					margin="dense"
					variant="outlined"
					value={ username }
					onChange={ (event) => setUsername(event.target.value) }
					inputProps={ {
						maxLength: 32
					} }
					autoComplete="section-login username"
				/>
				<TextField
					id="event-code-input"
					label={ translate('EVENT_CODE') }
					name="eventCode"
					type="text"
					margin="dense"
					variant="outlined"
					value={ eventCode }
					onChange={ (event) => setEventCode(event.target.value) }
					inputProps={ {
						maxLength: 32
					} }
					autoComplete="off"
				/>
				<TextField
					id="secret-code-input"
					label={ translate('SECRET_CODE') }
					name="secretCode"
					type="text"
					margin="dense"
					variant="outlined"
					value={ secretCode }
					onChange={ (event) => setSecretCode(event.target.value) }
					inputProps={ {
						maxLength: 32
					} }
					autoComplete="off"
				/>
				<Button
					id="login-page-form-submit"
					variant="contained"
					color="primary"
					type="submit"
					onClick={ handleSubmit }
					disabled={ !isValid() }
				>
					{ translate('SIGN_IN') }
				</Button>
			</form>
			<div className="copyright-notice">
				© { new Date().getFullYear() } Gear it Forward
			</div>
		</div>
	);
}
