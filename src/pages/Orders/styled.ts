import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Orders__Wrapper = styled.div``;

export const Orders__Footer = styled.footer<ThemeT>`
	max-width: 800px;
	margin: 0 auto;
	p {
		line-height: 24px;
	}
	a {
		color: ${(props) => props.theme.light.colors.primary.blue};
		text-decoration: none;
	}
`;
