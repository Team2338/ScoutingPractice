import React from 'react';
import './Grid.scss';
import { activateNode, useAppDispatch, useAppSelector } from '../../../state';
import { Gamemode } from '../../../models';


interface IProps {
	gamemode: Gamemode
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
		let variant: 'outlined' | 'filled';

		if (props.gamemode === Gamemode.auto) {
			color = 'primary';
		}
	});

	return (
		<div className="grid-wrapper">
			Grid Component
		</div>
	);
}
