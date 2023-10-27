import { ButtonStyled, ButtonWrapper, Form__Label, Modal__Wrapper } from '~styles/shared';

import {
	AdmissionInformation__DescriptionWrapper,
	AdmissionInformation__Modal__Description,
	AdmissionInformation__Modal__List,
	AdmissionInformation__Modal__ListItem,
	AdmissionInformation__Modal__Wrapper,
	AdmissionInformation__Title,
	AdmissionInformation__Wrapper,
} from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { Checkbox, Modal } from '@mui/material';
import { useState } from 'react';

export const AdmissionInformation = () => {
	const [isShow, setIsShow] = useState(false);
	const [isAgree, setIsAgree] = useState(false);
	const navigate = useNavigate();
	const onClose = () => setIsShow(false);
	const continueHandler = () => {
		setIsShow(true);
	};
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
			<ButtonStyled onClick={continueHandler} variant='contained' color='primary'>
				Continue
			</ButtonStyled>
			<Modal
				open={isShow}
				onClose={onClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Modal__Wrapper>
					<AdmissionInformation__Modal__Wrapper>
						<AdmissionInformation__Modal__Description>
							Each pass allows for ONE Spectator to attend the event for the day or days specified. After purchase, you
							will receive a QR Code ticket by email to the event. Show this QR Code and an id (drivers license, state
							id, etc) to enter the event. Alternatively, we encourage you to use the{' '}
							<Link to={'/'}>SportWrench App</Link> to manage your tickets and ID verification.
						</AdmissionInformation__Modal__Description>
						<AdmissionInformation__Modal__List>
							<AdmissionInformation__Modal__ListItem>
								If you have a ticketing issue, please communicate with the event immediately
							</AdmissionInformation__Modal__ListItem>
							<AdmissionInformation__Modal__ListItem>
								Refunds for unused passes will be issued on request. Refund Policy
							</AdmissionInformation__Modal__ListItem>
							<AdmissionInformation__Modal__ListItem>
								If you dispute a charge, you will incur a $20 fee and will be banned from all future events until this
								fee is paid. Dispute Policy
							</AdmissionInformation__Modal__ListItem>
						</AdmissionInformation__Modal__List>
						<Form__Label
							style={{ paddingLeft: '16px', marginBottom: '58px' }}
							control={<Checkbox onChange={() => setIsAgree(!isAgree)} />}
							label='I agree to the Refund and Dispute Policy'
						/>
						<ButtonWrapper>
							<ButtonStyled onClick={onClose} variant='outlined'>
								Close
							</ButtonStyled>
							<ButtonStyled
								variant='contained'
								color='primary'
								onClick={() => navigate('/purchase-code')}
								disabled={!isAgree}
							>
								Continue
							</ButtonStyled>
						</ButtonWrapper>
					</AdmissionInformation__Modal__Wrapper>
				</Modal__Wrapper>
			</Modal>
		</AdmissionInformation__Wrapper>
	);
};
