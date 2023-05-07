import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AllianceColor } from '../../../models/src/DataModels';
import { useTranslator } from '../../../services';
import './AllianceSelector.scss';

const RED: string = '#EE4444';
const BLUE: string = '#5577FF';
const GREY: string = '#DBDEDF';

export default function AllianceSelector() {

	const translate = useTranslator();
	const [selectedColor, setSelectedColor] = useState(AllianceColor.unknown);

	const isRed: boolean = selectedColor === AllianceColor.red;
	const isBlue: boolean = selectedColor === AllianceColor.blue;

	return (
		<div
			className="alliance-selector"
			role="radiogroup"
			aria-label={translate('ALLIANCE_COLOR')}
		>
			<Button
				style={{
					backgroundColor: isRed ? RED : GREY,
					borderColor: isRed ? RED : GREY,
					color: isRed ? '#FFF' : RED
				}}
				variant={ isRed ? 'contained' : 'outlined' }
				onClick={ () => setSelectedColor(AllianceColor.red) }
				disableElevation
			>
				{ translate('RED_ALLIANCE') }
			</Button>
			<Button
				style={{
					backgroundColor: isBlue ? BLUE : GREY,
					borderColor: isBlue ? BLUE : GREY,
					color: isBlue ? '#FFF' : BLUE
				}}
				variant={ selectedColor === AllianceColor.blue ? 'contained' : 'outlined' }
				onClick={ () => setSelectedColor(AllianceColor.blue) }
				disableElevation
			>
				{ translate('BLUE_ALLIANCE') }
			</Button>
		</div>
	);
}
