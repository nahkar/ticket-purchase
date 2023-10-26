import { Box } from '@mui/material';
import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Stepper__Wrapper = styled(Box)`
	max-width: 680px;
	margin: 0 auto 64px;
`;
export const Stepper__Completed = styled(Box)<ThemeT>`
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background: ${(props) => props.theme.light.colors.primary.blue};
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		font-size: 16px;
		fill: #fff;
	}
`;
export const Stepper__Current = styled(Box)<ThemeT>`
	width: 20px;
	height: 20px;
	border-radius: 100%;
	border: 1px solid ${(props) => props.theme.light.colors.primary.blue};
	color: ${(props) => props.theme.light.colors.primary.blue};
	text-align: center;
	font-size: 14px;
`;
export const Stepper__Icompleted = styled(Box)`
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background: #919eab;
	border: 1px solid #919eab;
	color: #fff;
	text-align: center;
	font-size: 14px;
`;
