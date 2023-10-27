import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const FormBorderBox__Wrapper = styled.div<ThemeT>`
	margin: 0 auto;
	width: 100%;
	padding: 20px 24px;
	border-radius: 8px;
	position: relative;
	border: 1px solid ${(props) => props.theme.light.colors.form.border};
`;
export const FormBorderBox__Label = styled.div<ThemeT>`
	font-size: 12px;
	color: #919eab;
	position: absolute;
	left: 10px;
	top: -10px;
	background: #fff;
	padding: 0 5px;
`;
export const FormBorderBox__ClearBtn = styled.button<ThemeT>`
	border: none;
	background: #fff;
	padding: 0 5px;
	position: absolute;
	right: 21px;
	top: -8px;
	font-size: 14px;
	color: #3366ff;
	cursor: pointer;
`;
