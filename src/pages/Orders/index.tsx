import { EventCard } from '~components/EventCard';
import { ContainerStyled } from '~styles/shared';
import { Orders__Footer, Orders__Wrapper } from './styled';
import { OrderedItem } from '~components/OrderedItem';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
export const Orders = () => {
	const orders = [
		{
			id: uuidv4(),
			name: 'John Smith',
			order: '2 Daily pass',
		},
		{
			id: uuidv4(),
			name: 'Jane Smith',
			order: '1 Weekly pass',
		},
	];
	return (
		<ContainerStyled>
			<EventCard />
			<Orders__Wrapper>
				{orders.map((order) => (
					<OrderedItem order={order} key={order.id} />
				))}
				<Orders__Footer>
					<p>
						For questions about your tickets, contact <Link to={'/'}>event support</Link>
					</p>
					<p>
						To view your purchases visit <Link to={'/'}>Sportwrench Ticketing</Link>
					</p>
				</Orders__Footer>
			</Orders__Wrapper>
		</ContainerStyled>
	);
};
