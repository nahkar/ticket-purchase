import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const TicketDescription__Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
`;
export const TicketDescription__QrWrapper = styled.div<ThemeT>`
	border-radius: 8px;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	width: 355px;
	padding: 40px 56px 19px 56px;
	h2 {
		text-align: center;
		font-size: 32px;
		line-height: 48px;
		margin: 0 0 35px;
	}
	img {
		display: block;
		width: 220px;
		margin: 0 auto 43px;
	}
	p {
		font-size: 10px;
		line-height: 18px;
		color: #637381;
		padding: 0 0 0 8px;
		letter-spacing: -.3px;
	}
`;
export const TicketDescription__DescribeWrapper = styled.div<ThemeT>`
	border-radius: 8px;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	width: 477px;
	padding: 40px 46px 40px 42px;
`;
export const TicketDescription__DescribeTitle = styled.h2<ThemeT>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 24px;
	line-height: 36px;
	color: ${(props) => props.theme.light.colors.primary.blue};
	margin: 0 0 16px;
`;
export const TicketDescription__DescribeText = styled.p<ThemeT>`
	line-height: 24px;
	color: ${(props) => props.theme.light.colors.text.secondary};
	margin: 0 0 43px;
`;
export const TicketDescription__DescribeList = styled.ul<ThemeT>`
	list-style: none;
	padding: 0 0 0 5px;
`;
export const TicketDescription__DescribeListItem = styled.li<ThemeT>`
	margin: 0 0 19px;
	display: flex;
	justify-content: space-between;
`;
export const TicketDescription__DescribeListItemKey = styled.span<ThemeT>``;
export const TicketDescription__DescribeListItemValue = styled.span<ThemeT>``;

export const TicketDescription__WalletBtn = styled.button<ThemeT>`
	display: flex;
	border-radius: 15px;
	background-color: #fff;
	border: 1px solid ${(props) => props.theme.light.colors.text.primary};
	align-items: center;
	padding: 15px 26px 15px 15px;
	font-size: 16px;
	margin: 0 0 17px;
	cursor: pointer;
	img {
		margin: 0 15px 0 0;
		width: 36px;
	}
`;
