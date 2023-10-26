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
	margin-bottom: 54px;
	p {
		/* letter-spacing: -1px;
		word-spacing: 0.3px; */
		line-height: 22px;
	}
	ul {
		padding: 0 0 0 20px;
	}
	li {
		/* letter-spacing: -1px;
		word-spacing: 0.3px; */
		line-height: 22px;
		&:last-child {
			margin: 0;
		}
	}
`;
