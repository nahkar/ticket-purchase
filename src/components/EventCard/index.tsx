import { useLocation } from 'react-router-dom';
import { EventCard__TitleWrapper, EventCard__Wrapper } from './styled';
import { getMbOfEventCard } from '~styles/utils';
export const EventCard = () => {
	const location = useLocation();
	const mb = getMbOfEventCard(location.pathname);
	return (
		<EventCard__Wrapper $mb={mb}>
			<EventCard__TitleWrapper>
				<p>Sep 29 - 30, 2023, Jacksonville, FL</p>
				<p>2023 JJVA Spike Awareness: Block Cancer High School Classic</p>
			</EventCard__TitleWrapper>
		</EventCard__Wrapper>
	);
};
