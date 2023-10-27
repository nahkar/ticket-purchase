import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const CollegeProposal__Title = styled.p<ThemeT>`
	font-weight: 600;
	margin: 0 0 16px;
	padding: 0 0 0 22px;
`;
export const CollegeProposal__Wrapper = styled.div<ThemeT>`
`;
export const CollegeProposal__Box = styled.div<ThemeT>`
	border-radius: 8px;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	min-height: 368px;
	padding: 60px 0 55px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin: 0 0 105px;
`;
export const CollegeProposal__Description = styled.p<ThemeT>`
	font-size: 12px;
	line-height: 18px;
	color: ${(props) => props.theme.light.colors.text.secondary};
	padding: 0 0 0 39px;
	max-width: 640px;
	margin: 0 0 10px;
`;
export const CollegeProposal__CollegeContainer = styled.div`
	border-radius: 12px;
	background: #dfe3e8;
	padding: 16px;
	max-width: 650px;
	margin: 0 0 23px 40px;
	header {
		display: flex;
		align-items: center;
		margin: 0 0 14px;
		img {
			max-width: 133px;
		}
		p {
			font-size: 12px;
			line-height: 18px;
			color: ${(props) => props.theme.light.colors.button.outlined};
			margin: 0 0 0 10px;
		}
	}
	ul {
		padding: 0 0 0 20px;
	}
	li {
		font-size: 12px;
		line-height: 18px;
		color: ${(props) => props.theme.light.colors.button.outlined};
	}
`;