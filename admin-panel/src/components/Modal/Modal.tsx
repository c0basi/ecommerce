import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, styled } from '@mui/material';

interface ModalProps {
	children: React.ReactNode;
}

const StyledModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignContent: 'flex-start',
});

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function BasicModal({ children }: ModalProps) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			{/* Chage this to hamburger */}
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="open drawer"
				onClick={handleOpen}
				sx={{ mr: 1, ml: 1 }}
			>
				<MenuIcon />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={'40%'} height={'100vh'} overflow={'scroll'}>
					{children}
				</Box>
			</Modal>
		</div>
	);
}
