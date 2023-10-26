import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Order__Wrapper = styled.div``;

export const Order__Footer = styled.footer<ThemeT>`
margin: 0 0 88px;
	p {
		line-height: 24px;
	}
	a {
		color: ${(props) => props.theme.light.colors.primary.blue};
		text-decoration: none;
	}
`;
