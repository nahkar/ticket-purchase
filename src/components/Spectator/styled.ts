import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Spectator__Wrapper = styled.div<{$isLastSpectator: boolean}>`
	margin: 0 0 ${({ $isLastSpectator }) => ($isLastSpectator ? '0' : '59px')};
`;
export const Spectator__Footer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	padding: 7px 27px 0;
`;

export const Spectator__DeleteBtn = styled.button<ThemeT>`
	background: transparent;
	border: none;
	cursor: pointer;
	position: relative;
	z-index: 1;
	font-size: 13px;
	color: ${(props) => props.theme.light.colors.primary.red};
`;
