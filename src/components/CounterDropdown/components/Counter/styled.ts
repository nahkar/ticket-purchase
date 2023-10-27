import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Counter__Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
export const Counter__Price = styled.div<{$isEmpty: boolean}>`
	font-size: 12px;
	line-height: 18px;
	color: ${(props) => props.$isEmpty ? '#637381' : props.theme.light.colors.text.primary};
`;
export const Counter__Button = styled.button<ThemeT>`
	border: none;
	background: none;
	color: ${(props) => props.theme.light.colors.primary.blue};
	cursor: pointer;
`;

export const Counter__Count = styled.div<ThemeT>`
	color: ${(props) => props.theme.light.colors.primary.blue};
`;

export const Counter__Calc = styled.div<ThemeT>`
	margin: 0 0 0 8px;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	padding: 5px 8px;
	width: 75px;
	height: 32px;
	border: 1px solid ${(props) => props.theme.light.colors.primary.blue};
	img {
		display: block;
	}
`;
