import React from 'react';
import './Grid.scss';
import { activateNode, useAppDispatch, useAppSelector } from '../../../state';
import { Gamemode } from '../../../models';
import { Button, Typography } from '@mui/material';
import { useTranslator } from '../../../services';
import HelpButton from '../help-button/HelpButton';


interface IProps {
	gamemode: Gamemode;
}

function getSymbol(index: number) {
	if (index > 17) {
		return '▲ ■';
	}

	if (index % 3 === 1) {
		return '■';
	}

	return '▲';
}

function getTeleopColor(autoScore: number, teleopScore: number) {
	if (teleopScore === 0) {
		return 'primary';
	}

	if (teleopScore === 1 && autoScore === 0) {
		return 'primary';
	}

	if (teleopScore === 1 && autoScore === 1) {
		return 'success';
	}

	if (teleopScore === 2) {
		return 'success';
	}
}

export default function Grid(props: IProps) {

	const translate = useTranslator();
	const dispatch = useAppDispatch();
	const handleClick = (index: number) => dispatch(activateNode(props.gamemode, index));
	const autoGrid = useAppSelector(state => state.match[Gamemode.auto].grid);
	const teleopGrid = useAppSelector(state => state.match[Gamemode.teleop].grid);

	const combinedGrid: number[] = [];
	for (let i = 0; i < teleopGrid.length; i++) {
		combinedGrid[i] = autoGrid[i] + teleopGrid[i];
	}

	const elements = combinedGrid.map((numPieces: number, index: number) => {
		let variant: 'outlined' | 'contained';
		let color: 'primary' | 'secondary' | 'success';

		if (props.gamemode === Gamemode.auto) {
			variant = (autoGrid[index] === 0) ? 'outlined' : 'contained';
			color = 'primary';

		} else {
			variant = (teleopGrid[index] === 0) ? 'outlined' : 'contained';
			color = getTeleopColor(autoGrid[index], teleopGrid[index]);
		}

		return (
			<Button
				key={ index }
				color={ color }
				variant={ variant }
				onClick={ () => handleClick(index) }
			>
				{ getSymbol(index) }
			</Button>
		);
	});

	return (
		<div className="grid-wrapper">
			<div id="grid-label" className="label">
				<Typography
					variant="h3"
					width="fit-content"
				>
					{ translate('GRID') }
				</Typography>
				<HelpButton name="grid-instructions">
					{ translate('GRID_HELPER_TEXT') }
				</HelpButton>
			</div>
			<div className="grid-buttons" aria-labelledby="grid-label">
				{ elements }
			</div>
		</div>
	);
}
