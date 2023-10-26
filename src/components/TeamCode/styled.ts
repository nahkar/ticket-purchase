import { Box } from '@mui/material';
import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const TeamCode__Wrapper = styled(Box)`
	max-width: 400px;
	margin: 0 auto 105px;
`;

export const TeamCode__Title = styled.h6<ThemeT>`
	font-size: 18px;
	line-height: 28px;
	color: ${(props) => props.theme.light.colors.primary.blue};
	margin: 0 0 24px;
	text-align: center;
`;

export const TeamCode__TextField = styled.input`
	border-radius: 16px;
	background-color: #f5f5f5;
	height: 120px;
	width: 100%;
	border: none;
	font-size: 32px;
	line-height: 48px;
	text-align: center;
	margin: 0 0 24px;
	&:focus {
		outline: none;
	}
	&::placeholder {
		letter-spacing: 10px;
	}
`;

export const TeamCode__Description = styled.p`
	font-size: 14px;
	line-height: 22px;
	word-spacing: -0.2px;
`;
