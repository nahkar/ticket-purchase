import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Order__Wrapper = styled.div<{$isSingleTicket?: boolean}>`
	padding-top: ${props => props.$isSingleTicket ? 0 : 20}px;
`;
export const Order__TitleName = styled.p`
	font-size: 32px;
	line-height: 48px;
	text-align: center;
	font-weight: 700;
	margin: 0 0 35px;
`;
export const Order__Footer = styled.footer<ThemeT>`
	padding: 15px 0 0;
	margin: 0 auto 87px;
	max-width: 800px;
	p {
		line-height: 24px;
	}
	a {
		color: ${(props) => props.theme.light.colors.primary.blue};
		text-decoration: none;
	}
`;
