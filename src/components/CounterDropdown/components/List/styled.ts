import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const List__Item = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 16px 0;
	border-bottom: 1px solid ${(props) => props.theme.light.colors.form.border};
`;
export const List__Description = styled.div``;
export const List__Title = styled.div<ThemeT>`
	font-size: 16px;
	line-height: 24px;
	font-weight: 600;
	color: ${(props) => props.theme.light.colors.text.primary};
`;
export const List__SubTitle = styled.div<ThemeT>`
	font-size: 12px;
	line-height: 18px;
	color: ${(props) => props.theme.light.colors.text.secondary};
`;

export const List__Main = styled.ul`
	width: 322px;
	list-style: none;
	margin-top: 8px;
	border: 1px solid ${(props) => props.theme.light.colors.form.border};
	padding: 16px;
	border-radius: 8px;
	background: #fff;
	position: relative;
	z-index: 999999;
	& ${List__Item} {
		&:first-child {
			border-top: 1px solid ${(props) => props.theme.light.colors.form.border};
		}
	}
`;
export const List__Wrapper = styled.div<{ $isOpen: boolean }>`
	position: absolute;
	z-index: ${({ $isOpen }) => ($isOpen ? 2 : 0)};
`;
