import { Box } from '@mui/material';
import styled from 'styled-components';

export const EventCard__Wrapper = styled(Box)`
	box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.16);
	padding: 16px 24px;
	border-radius: 12px;
	min-height: 84px;
	max-width: 872px;
	margin: 0 auto 72px;
	display: flex;
	align-items: center;
`;
export const EventCard__TitleWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	margin: 0 0 0 10px;
	p {
		margin: 0 0 4px;
		font-size: 16px;
		line-height: 24px;
		&:last-child {
			margin: 0;
		}
	}
`;
