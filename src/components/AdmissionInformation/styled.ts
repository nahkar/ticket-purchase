import { Box } from '@mui/material';
import styled from 'styled-components';
import { ButtonStyled } from '~styles/shared';

export const AdmissionInformation__Wrapper = styled(Box)`
	max-width: 872px;
	${ButtonStyled} {
		width: 432px;
		margin: 0 auto !important;
		display: block;
	}
`;
export const AdmissionInformation__Title = styled(Box)`
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 24px;
	font-weight: 600;
	color: ${(props) => props.theme.light.colors.text.primary};
`;
export const AdmissionInformation__DescriptionWrapper = styled(Box)`
	margin-bottom: 57px;
	p {
		line-height: 23px;
		&:first-child{
			margin: 0 0 3px;
		}
		&:last-child {
		}
	}
	ul {
		padding: 0 0 0 25px;
		margin: 0 0 5px;
	}
	li {
		line-height: 22px;
		margin: 0 0 2px;
	}
`;
