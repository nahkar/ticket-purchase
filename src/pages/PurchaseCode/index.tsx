import { EventCard } from '~components/EventCard';
import { TeamCode } from '~components/TeamCode';
import { ContainerStyled } from '~styles/shared';

export const PurchaseCode = () => {
	return (
		<ContainerStyled>
			<EventCard />
			<TeamCode />
		</ContainerStyled>
	);
};
