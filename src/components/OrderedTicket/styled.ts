import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const OrderedTicket_Wrapper = styled.div<ThemeT>`
	border-radius: 8px;
	background-color: #fff;
	margin: 0 0 16px;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	width: 100%;
	padding: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const OrderedTicket__Name = styled.div`
	font-size: 20px;
	line-height: 30px;
	a {
		text-decoration: none;
		font-size: 20px;
		line-height: 30px;
	}
`;
export const OrderedTicket__Order = styled.div<ThemeT>`
	color: ${(props) => props.theme.light.colors.text.secondary};
	font-size: 14px;
	line-height: 22px;
`;
