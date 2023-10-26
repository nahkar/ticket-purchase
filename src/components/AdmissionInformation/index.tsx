import { ButtonStyled } from '~styles/shared';
import {
	AdmissionInformation__DescriptionWrapper,
	AdmissionInformation__Title,
	AdmissionInformation__Wrapper,
} from './styled';
import { useNavigate } from 'react-router-dom';

export const AdmissionInformation = () => {
	const navigate = useNavigate();
	return (
		<AdmissionInformation__Wrapper>
			<AdmissionInformation__Title>IMPORTANT Admission Information:</AdmissionInformation__Title>
			<AdmissionInformation__DescriptionWrapper>
				<p>THIS PASS IS ONLY good for admission to the 2023 Spiketacular!</p>
				<ul>
					<li>Passes are for SINGLE PERSON admission ONLY and CANNOT be shared between spectators.</li>
					<li>There are no limitations on admission at this time for this event.</li>
					<li>
						All spectators will need to present their own QR code pass on a mobile device along with a corresponding
						photo ID to enter the event. This includes minors 16+ with photo ID.
					</li>
					<li>Minors with passes who DO NOT have an ID must be accompanied by an adult pass-holder.</li>
					<li>If necessary, a printed copy out of the QR code pass can be presented.</li>
					<li>Lost or forgotten passes can be replaced by presenting a photo ID.</li>
					<li>Children 7 and under are free and must be accompanied by an adult pass-holder.</li>
					<li>All purchases are non-refundable.</li>
				</ul>
				<p>
					An inherent risk of exposure to COVID-19 exists in any public place where people are present. COVID-19 is an
					extremely contagious disease that can lead to severe illness and death. According to the Centers for Disease
					Control and Prevention, senior citizens and people with underlying medical conditions are especially
					vulnerable.By attending the 2023 Spiketacular you voluntarily assume all risks related to exposure to
					COVID-19.
				</p>
			</AdmissionInformation__DescriptionWrapper>
			<ButtonStyled onClick={() => navigate('/purchase-code')} variant='contained' color='primary'>
				Continue
			</ButtonStyled>
		</AdmissionInformation__Wrapper>
	);
};
