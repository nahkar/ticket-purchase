import styled from 'styled-components';
import { ThemeT } from '../../styles/theme';

export const CounterDropdown__Wrapper = styled.div<ThemeT & { $isOpen: boolean }>`
	position: relative;
	width: 322px;
	z-index: ${({ $isOpen }) => ($isOpen ? 2 : 0)};
`;
export const CounterDropdown__Main = styled.div<ThemeT>`
	border: 1px solid black;
	width: 322px;
	height: 56px;
	border: 1px solid ${(props) => props.theme.light.colors.form.border};
	background: #fff;
	border-radius: 8px;
	position: relative;
`;
export const CounterDropdown__Placeholder = styled.div<ThemeT>`
	font-size: 14px;
	color: ${(props) => props.theme.light.colors.text.primary};
	height: 100%;
	padding: 0 0 0 14px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;
export const CounterDropdown__Arrow = styled.img`
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
`;
