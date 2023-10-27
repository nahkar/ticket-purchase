import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const OrderedTicket_Wrapper = styled.div<{$isSingleTicket?: boolean}>`
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	max-width: ${(props) => props.$isSingleTicket ? '872px' : '800px'};
	margin: 0 auto ${(props) => props.$isSingleTicket ? '16px' : '24px'};
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
