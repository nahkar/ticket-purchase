import { FormControlLabel } from '@mui/material';
import styled from 'styled-components';
import { ThemeT } from '~styles/theme';

export const CollegeProposal__Title = styled.p<ThemeT>`
	font-weight: 600;
	margin: 0 0 16px;
`;
export const CollegeProposal__Wrapper = styled.div<ThemeT>``;
export const CollegeProposal__Box = styled.div<ThemeT>`
	border-radius: 8px;
	box-shadow: 0px 20px 40px -4px ${(props) => props.theme.light.colors.shadow.main};
	min-height: 368px;
	padding: 49px 0 41px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin: 0 0 122px;
`;
export const CollegeProposal__Description = styled.p<ThemeT>`
	font-size: 12px;
	line-height: 18px;
	color: ${(props) => props.theme.light.colors.text.secondary};
	padding: 0 0 0 49px;
	max-width: 604px;
	margin: 0 0 11px;
`;
export const CollegeProposal__CollegeContainer = styled.div`
	border-radius: 12px;
	background: #dfe3e8;
	padding: 16px;
	max-width: 604px;
	margin: 0 0 33px;
	header {
		display: flex;
		align-items: center;
		margin: 0 0 16px;
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
		padding: 0 0 0 16px;
	}
	li {
		font-size: 12px;
		line-height: 18px;
		color: ${(props) => props.theme.light.colors.button.outlined};
	}
`;
export const CollegeProposal__Label = styled(FormControlLabel)`
	padding: 0 0 0 8px;
	span {
		font-size: 14px;
	}
	.Mui-checked {
		svg {
			fill: #4066ff;
		}
	}
	svg {
		fill: #637381;
	}
`;
