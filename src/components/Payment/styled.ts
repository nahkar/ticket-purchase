import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Payment__Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 0 0 64px 0;
`;
export const Payment__Main = styled.main`
	border-radius: 8px;
	box-shadow: 0px 20px 40px -4px rgba(145, 158, 171, 0.16);
	width: 722px;
	padding: 0 10px;
`;
export const Payment__Inner = styled.main`
	width: 496px;
	margin: auto;
`;
export const Payment__Aside = styled.aside`
	width: 342px;
`;
export const Payment__CardholderWrapper = styled.div`
	margin: 0 0 30px;
`;

export const Payment__CardholderList = styled.ul`
	list-style: none;
	display: flex;
`;
export const Payment__CardholderItem = styled.li<{ $isChecked: boolean | ThemeT }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 40px;
	border: 1px solid ${(props) => (props.$isChecked ? props.theme.light.colors.primary.blue : '#dfe3e8')};
	position: relative;
	margin: 0 0 0 13px;
	cursor: pointer;
	&:hover {
		border: 1px solid ${(props) => props.theme.light.colors.primary.blue};
	}
	&:first-child {
		margin: 0;
	}
	input[type='radio'] {
		width: 64px;
		height: 40px;
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}
`;
export const Payment__CardholderTitle = styled.p`
	line-height: 24px;
	font-weight: 600;
	color: ${(props) => props.theme.light.colors.button.outlined};
	margin: 0 0 26px;
`;
export const Payment__CardholderCheckedWrapper = styled.div<ThemeT>`
	position: absolute;
	left: -3px;
	top: -8px;
	background: #fff;
	width: 16px;
	height: 16px;
	border-radius: 100%;
	border: 1px solid ${(props) => props.theme.light.colors.primary.blue};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Payment__CardholderInformationWrapper = styled.div``;
export const Payment__CardIconsWrapper = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;
	img {
		display: inline-block;
		margin: 0 0 0 5px;
		&:first-child {
			margin: 0;
		}
	}
`;
export const Payment__OrderSummaryWrapper = styled.div`
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0px 20px 40px -4px rgba(145, 158, 171, 0.16);
	padding: 0 16px;
	margin: 0 0 16px;
`;
export const Payment__OrderAsideRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 0 17px;
`;
export const Payment__OrderAsideTitle = styled.p`
	line-height: 24px;
	font-weight: 600;
	color: ${(props) => props.theme.light.colors.button.outlined};
`;
export const Payment__OrderSummaryEditBtn = styled.button<ThemeT>`
	border: none;
	background: none;
	cursor: pointer;
	display: flex;
	font-size: 13px;
	color: ${(props) => props.theme.light.colors.primary.blue};
`;
export const Payment__OrderSummaryList = styled.ul`
	list-style: none;
`;
export const Payment__OrderSummaryItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 17px 0;
	border-top: 0.5px solid #919eab;
	&:first-child {
		border: none;
		padding-top: 0;
	}
`;
export const Payment__OrderSummaryName = styled.span`
	color: ${(props) => props.theme.light.colors.text.subText};
	font-size: 14px;
	line-height: 22px;
`;
export const Payment__OrderSummaryOrder = styled.span`
	color: ${(props) => props.theme.light.colors.button.outlined};
	font-size: 14px;
	line-height: 22px;
`;

export const Payment__OrderTotalWrapper = styled.div<ThemeT>`
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
export const Payment__OrderTotalPrice = styled.span`
	font-size: 14px;
	line-height: 22px;
	color: ${(props) => props.theme.light.colors.primary.green};
`;
