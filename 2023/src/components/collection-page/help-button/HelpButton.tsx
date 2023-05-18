import React, { ReactNode, useState } from 'react';
import { IconButton, Popover } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

interface IProps {
	name: string;
	children: ReactNode;
}

export default function HelpButton(props: IProps) {

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	const isOpen: boolean = Boolean(anchorEl);
	const id: string = isOpen ? props.name : undefined;

	return (
		<React.Fragment>
			<IconButton
				color="info"
				onClick={ handleClick }
				aria-describedby={ id }
			>
				<HelpIcon/>
			</IconButton>
			<Popover
				id={ id }
				open={ isOpen }
				anchorEl={ anchorEl }
				onClose={ handleClose }
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				PaperProps={{
					variant: 'elevation',
					sx: {
						padding: '8px'
					}
				}}
			>
				{ props.children }
			</Popover>
		</React.Fragment>
	);
}
