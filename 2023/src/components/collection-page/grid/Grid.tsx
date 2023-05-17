import React from 'react';
import './Grid.scss';
import { activateNode, useAppDispatch, useAppSelector } from '../../../state';
import { Gamemode } from '../../../models';
import { Button } from '@mui/material';


interface IProps {
	gamemode: Gamemode
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

export default function Grid(props: IProps) {

	const dispatch = useAppDispatch();
	const handleClick = (index: number) => dispatch(activateNode(props.gamemode, index));
	const autoGrid = useAppSelector(state => state.match[Gamemode.auto].grid);
	const teleopGrid = useAppSelector(state => state.match[Gamemode.teleop].grid);

	const combinedGrid: number[] = [];
	for (let i = 0; i < teleopGrid.length; i++) {
		combinedGrid[i] = autoGrid[i] + teleopGrid[i];
	}

	const elements = combinedGrid.map((numPieces: number, index: number) => {
		let color: 'primary' | 'secondary' | 'success';
		let variant: 'outlined' | 'contained';

		if (props.gamemode === Gamemode.auto) {
			color = (autoGrid[index] === 0) ? 'primary' : 'secondary';
		} else {
			if (combinedGrid[index] === 0) {
				color = 'primary';
			} else if (combinedGrid[index] === 1)
		}

		return (
			<Button
				key={index}
				color={color}
				variant={variant}
				onClick={() => handleClick(index)}
			>
				{ getSymbol(index) }
			</Button>
		);
	});

	return (
		<div className="grid-wrapper">
			{ elements }
		</div>
	);
}
