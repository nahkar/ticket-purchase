import { Link, useNavigate } from 'react-router-dom';
import { EventCard } from '~components/EventCard';
import { RelatedTickets } from '~components/RelatedTickets';
import { TicketDescription } from '~components/TicketDescription';
import { BackToTicketBtn, ContainerStyled } from '~styles/shared';
import {
	Ticket__Footer,
	Ticket__FooterDescription,
	Ticket__FooterList,
	Ticket__FooterListItem,
	Ticket__FooterTitle,
	Ticket__Wrapper,
} from './styled';

export const Ticket = () => {
	const navigate = useNavigate();
	return (
		<ContainerStyled>
			<EventCard />
			<TicketDescription />
			<RelatedTickets />
			<Ticket__Wrapper>
				<Ticket__Footer>
					<Ticket__FooterTitle>Important information</Ticket__FooterTitle>
					<Ticket__FooterDescription>
						Complete Ticket Info & Spectator Policies can be found on our <Link to={'/'}>Spectators Admission</Link>{' '}
						page <br /> Important Information
					</Ticket__FooterDescription>
					<Ticket__FooterList>
						<Ticket__FooterListItem>Required for entry by each spectator</Ticket__FooterListItem>
						<Ticket__FooterListItem>"QR code" ticket on a mobile device.</Ticket__FooterListItem>
						<Ticket__FooterListItem>Photo ID for each person 16 and older</Ticket__FooterListItem>
						<Ticket__FooterListItem>If under 16, must be accompanied by an adult</Ticket__FooterListItem>
						<Ticket__FooterListItem>Entry access for spectators will begin at</Ticket__FooterListItem>
						<Ticket__FooterListItem>7:00am for AM WAVE 1 Spectators</Ticket__FooterListItem>
					</Ticket__FooterList>
					<BackToTicketBtn onClick={() => navigate('/orders')} variant='outlined'>
						Back to ticket page
					</BackToTicketBtn>
				</Ticket__Footer>
			</Ticket__Wrapper>
		</ContainerStyled>
	);
};
