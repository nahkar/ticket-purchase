import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const OrderedItem__Wrapper = styled.div<ThemeT>`
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	width: 100%;
	padding: 12px 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 800px;
	margin: 0 auto 24px;
`;
export const OrderedItem__Name = styled.div`
	a {
		text-decoration: none;
		font-size: 20px;
		line-height: 30px;
		font-weight: 600;
	}
`;
export const OrderedItem__Order = styled.div<ThemeT>`
	line-height: 24px;
	color: ${(props) => props.theme.light.colors.text.secondary};
`;
