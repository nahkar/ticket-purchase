import { Modal } from '@mui/material';
import { EditOrderModal__Wrapper } from './modal.styled';
import { Step2Form } from '~pages/Step2/Step2Form';
import { ButtonStyled } from '~styles/shared';

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
			<EditOrderModal__Wrapper>
				<Step2Form isModal/>
				<ButtonStyled variant='contained' color='primary' sx={{ width: '204px', float: 'right' }}>
					Save
				</ButtonStyled>
			</EditOrderModal__Wrapper>
		</Modal>
	);
};
