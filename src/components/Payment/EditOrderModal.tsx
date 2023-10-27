import { Modal } from '@mui/material';
import { Step2Form } from '~pages/Step2/Step2Form';
import { ButtonStyled, Modal__Wrapper } from '~styles/shared';

type PropsT = {
	isShow: boolean;
	onClose: () => void;
};
export const EditOrderModal = ({ isShow, onClose }: PropsT) => {
	return (
		<Modal
			open={isShow}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Modal__Wrapper>
				<Step2Form isModal/>
				<ButtonStyled variant='contained' color='primary' sx={{ width: '204px', float: 'right' }}>
					Save
				</ButtonStyled>
			</Modal__Wrapper>
		</Modal>
	);
};
