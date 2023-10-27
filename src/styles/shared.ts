import { styled } from 'styled-components';
import { Box, Button, FormControlLabel, TextField } from '@mui/material';
import { ThemeT } from './theme';

export const ContainerStyled = styled.div`
`;

export const ButtonStyled = styled(Button)<ThemeT>`
	min-height: 48px;
	padding: 11px 22px !important;
	text-transform: none !important;
	font-size: 15px !important;
	line-height: 26px !important;
	min-width: 204px !important;
	background: ${(props) => props.color === 'primary' && props.theme.light.colors.primary.blue} !important;
	border-radius: 8px !important;
	color: ${(props) => props.variant === 'outlined' && props.theme.light.colors.button.outlined} !important;
	border: 1px solid
		${(props) => (props.variant === 'outlined' ? '#ccc' : 'none')} !important;
	border: 1px solid ${(props) => (props.variant === 'outlined' ? props.theme.light.colors.form.border : 'none')} !important;
	&.Mui-disabled{
		background-color: rgba(145, 158, 171, 0.24) !important;
		color: rgba(145, 158, 171, 0.8);
	}
`;

export const ButtonWrapper = styled(Box)`
	min-width: 480px;
	display: flex;
	justify-content: flex-end;
	${ButtonStyled} {
		margin: 0 24px 0 0 !important;
		&:last-child {
			margin: 0 23px 0 0px!important
		}
	}
`;
export const Form__TextField = styled(TextField)<{ $width?: number }>`
	width: ${({ $width }) => $width || 'auto'}px;
`;

export const Form__Row = styled.div<{ $mb?: number }>`
	margin-bottom: ${({ $mb }) => $mb || 0}px;
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
export const Form__Wrapper = styled.form<{ $mb?: number; $width?: number }>`
	max-width: ${({ $width }) => $width || 'auto'}px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	margin-bottom: ${({ $mb }) => $mb}px;
`;
export const AddNewSpectatorBtn = styled.button<ThemeT>`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 13px;
	padding: 0 0 0 6px;
	font-weight: 700;
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.light.colors.primary.blue};
	img {
		padding: 0 8px 0 0;
	}
`;
export const Shadow__Box = styled.div<ThemeT>`
	border-radius: 8px;
	padding: 10px;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
`;
export const BackToTicketBtn = styled(Button)<ThemeT>`
	border-radius: 8px !important;
	background-color: #fff !important;
	border: 1px solid ${(props) => props.theme.light.colors.primary.blue} !important;
	padding: 11px 22px !important;
	font-size: 15px !important;
	color: ${(props) => props.theme.light.colors.primary.blue} !important;
	min-width: 432px !important;
	text-transform: none !important;
`;
export const Modal__Wrapper = styled.div<ThemeT>`
	width: 994px;
	max-height: 90vh;
	overflow-y: scroll;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: fixed;
	padding: 84px 60px;
`;
export const Form__Label = styled(FormControlLabel)`
	span {
		font-size: 14px;
		padding-right: 17px;
	}
	.Mui-checked {
		svg {
			fill: #4066ff;
		}
	}
	svg {
		fill: #637381;
	}
`;
