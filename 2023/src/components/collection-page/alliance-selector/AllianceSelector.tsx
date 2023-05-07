import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AllianceColor } from '../../../models/src/DataModels';
import { useTranslator } from '../../../services';

export default function AllianceSelector() {

	const translate = useTranslator();
	const [selectedColor, setSelectedColor] = useState(AllianceColor.unknown);

	let blueColor = '#01233D';
	let redColor = '#01233D';

	if (selectedColor === AllianceColor.red) {
		redColor = '#EE4444';
	} else if (selectedColor === AllianceColor.blue) {
		blueColor = '#5577FF';
	}

	return (
		<div>
			<Button
				style={{ backgroundColor: redColor }}
				variant={ selectedColor === AllianceColor.red ? 'contained' : 'outlined' }
				onClick={ () => setSelectedColor(AllianceColor.red) }
			>
				{ translate('RED_ALLIANCE') }
			</Button>
			<Button
				style={{ backgroundColor: blueColor }}
				variant={ selectedColor === AllianceColor.blue ? 'contained' : 'outlined' }
				onClick={ () => setSelectedColor(AllianceColor.blue) }
			>
				{ translate('BLUE_ALLIANCE') }
			</Button>
		</div>
	);
}
