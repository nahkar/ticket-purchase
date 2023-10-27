import { Box } from '@mui/material';
import styled from 'styled-components';

export const EventCard__Wrapper = styled(Box)<{ $mb: number}>`
	box-shadow: 0px 12px 24px -4px ${(props) => props.theme.light.colors.shadow.main};
	padding: 16px 24px;
	border-radius: 12px;
	min-height: 84px;
	max-width: 872px;
	margin: 0 auto ${(props) => props.$mb}px;
	display: flex;
	align-items: center;
`;
export const EventCard__TitleWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	p {
		margin: 0 0 4px;
		font-size: 16px;
		line-height: 24px;
		&:last-child {
			margin: 0;
		}
	}
`;
