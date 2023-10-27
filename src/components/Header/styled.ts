import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const Header__Wrapper = styled.header<ThemeT>`
	display: flex;
	align-items: center;
	height: 88px;
	padding: 0 64px;
	background: #fff;
	margin-bottom: 40px;
	box-shadow: 0px 8px 16px  ${(props) => props.theme.light.colors.shadow.main};
`;
export const Header__Logo = styled.img`
	max-width: 179px;
	max-height: 32px;
`;
