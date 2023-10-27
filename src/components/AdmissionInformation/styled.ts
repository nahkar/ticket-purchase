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
export const AdmissionInformation__Modal__Wrapper = styled.div`
	max-width: 806px;
	margin: auto;
`;
export const AdmissionInformation__Modal__Description = styled.p`
font-size: 14px;
	line-height: 22px;
	a{
		color: ${(props) => props.theme.light.colors.primary.blue};
		text-decoration: none;
		&:hover{
			text-decoration: underline;
		}
	}
`;
export const AdmissionInformation__Modal__List = styled.ul`
	margin: 0 0 55px;
	padding: 0 0 0 25px;
`;
export const AdmissionInformation__Modal__ListItem = styled.li`
	line-height: 22px;
	font-size: 14px;
`;