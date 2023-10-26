import { EventCard } from '~components/EventCard';
import { BackToTicketBtn, ContainerStyled } from '~styles/shared';
import { Order__Footer, Order__Wrapper } from './styled';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { OrderedTicket } from '~components/OrderedTicket';
import { Box } from '@mui/material';
export const Order = () => {
	const navigate = useNavigate();
	const orders = [
		{
			id: uuidv4(),
			name: 'Daily pass',
			order: 'Available one of the days: 09/15 - 09/16',
		},
		{
			id: uuidv4(),
			name: 'Daily pass',
			order: 'Available one of the days: 09/15 - 09/16',
		},
	];
	return (
		<ContainerStyled>
			<EventCard />
			<Order__Wrapper>
				{orders.map((order) => (
					<OrderedTicket order={order} key={order.id} />
				))}
				<Order__Footer>
					<p>
						For questions about your tickets, contact <Link to={'/'}>event support</Link>
					</p>
					<p>
						To view your purchases visit <Link to={'/'}>Sportwrench Ticketing</Link>
					</p>
				</Order__Footer>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<BackToTicketBtn onClick={() => navigate('/orders')} variant='outlined'>
						Back to ticket page
					</BackToTicketBtn>
				</Box>
			</Order__Wrapper>
		</ContainerStyled>
	);
};
