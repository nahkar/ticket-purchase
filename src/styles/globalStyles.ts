import { createGlobalStyle } from 'styled-components';
import { ThemeT } from './theme';

export const GlobalStyle = createGlobalStyle<ThemeT>`
	* {
		font-size: 16px;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Public Sans';
		color: ${(props) => props.theme.light.colors.text.primary};;
	}
`;
