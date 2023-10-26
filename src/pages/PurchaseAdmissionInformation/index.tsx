import { AdmissionInformation } from '~components/AdmissionInformation';
import { EventCard } from '~components/EventCard';
import { ContainerStyled } from '~styles/shared';

export const PurchaseAdmissionInformation = () => {
	return (
		<ContainerStyled>
			<EventCard />
			<AdmissionInformation />
		</ContainerStyled>
	);
};
