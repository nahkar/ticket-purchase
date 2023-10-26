import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonStyled, ButtonWrapper } from '~styles/shared';

type PropsT = {
	isContinueDisable?: boolean;
	continueLabel?: string
};
export const ButtonsForm = ({ isContinueDisable, continueLabel }: PropsT) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	let nextPath = '';
	let prevPath = '';
	if (pathname === '/step-one') {
		nextPath = '/step-two';
		prevPath = '/purchase-code';
	}
	if (pathname === '/step-two') {
		nextPath = '/step-three';
		prevPath = '/step-one';
	}
	if (pathname === '/step-three') {
		nextPath = '/step-three-college';
		prevPath = '/step-two';
	}
	if (pathname === '/step-three-college') {
		nextPath = '/step-four';
		prevPath = '/step-three';
	}
	if (pathname === '/step-four') {
		nextPath = '/payment-success';
		prevPath = '/step-three-college';
	}

	return (
		<ButtonWrapper>
			<ButtonStyled onClick={() => navigate(prevPath)} variant='outlined'>
				Previous
			</ButtonStyled>
			<ButtonStyled variant='contained' color='primary' onClick={() => navigate(nextPath)} disabled={isContinueDisable}>
				{continueLabel ? continueLabel : 'Continue'}
			</ButtonStyled>
		</ButtonWrapper>
	);
};
