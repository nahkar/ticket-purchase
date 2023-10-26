import { useNavigate } from 'react-router-dom';
import {
	TeamCode__Description,
	TeamCode__TextField,
	TeamCode__Title,
	TeamCode__Wrapper,
} from './styled';
import { ButtonStyled, ButtonWrapper } from '~styles/shared';

export const TeamCode = () => {
	const navigate = useNavigate();
	return (
		<>
			<TeamCode__Wrapper>
				<TeamCode__Title>Enter team code</TeamCode__Title>
				<TeamCode__TextField type='text' placeholder='_ _ _ _ _ _' maxLength={6} />
				<TeamCode__Description>
					Please contact your club director or team's coach if you do not know your team code.
				</TeamCode__Description>
			</TeamCode__Wrapper>
			<ButtonWrapper>
				<ButtonStyled onClick={() => navigate('/purchase-admission-information')} variant='outlined'>
					Previous
				</ButtonStyled>
				<ButtonStyled variant='contained' color='primary' onClick={() => navigate('/step-one')}>
					Continue
				</ButtonStyled>
			</ButtonWrapper>
		</>
	);
};
