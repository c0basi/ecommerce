import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';

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
			<Button onClick={handleOpen}>Book Now</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={'30%'} height={'100vh'} overflow={'scroll'}>
					{children}
				</Box>
			</Modal>
		</div>
	);
}
