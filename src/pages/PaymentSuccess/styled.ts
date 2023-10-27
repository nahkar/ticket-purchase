import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const PaymentSuccess__Wrapper = styled.div``;
export const PaymentSuccess__Header = styled.header`
	width: 640px;
	margin: 0 auto 80px;
	text-align: center;
`;
export const PaymentSuccess__Title = styled.h1`
	font-size: 32px;
	line-height: 48px;
	margin: 64px 0 24px;
`;
export const PaymentSuccess__Description = styled.p`
	line-height: 24px;
	font-weight: 600;
	margin: 0 0 16px;
`;
export const PaymentSuccess__SubDescription = styled.p`
	line-height: 24px;
	margin: 0 0 16px;
`;
export const PaymentSuccess__Footer = styled.footer<ThemeT>`
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
