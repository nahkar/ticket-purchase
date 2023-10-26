import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const EditOrderModal__Wrapper = styled.div<ThemeT>`
	width: 994px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: fixed;
	padding: 84px 60px;
`;
