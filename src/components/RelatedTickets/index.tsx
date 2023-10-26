import { v4 as uuidv4 } from 'uuid';
import { RelatedTickets__Title, RelatedTickets__Wrapper } from './styled';
import { Order__Wrapper } from '~pages/Order/styled';
import { OrderedTicket } from '~components/OrderedTicket';
export const RelatedTickets = () => {
	const orders = [
		{
			id: uuidv4(),
			name: 'Daily pass',
			customer: 'John Smith',
			order: 'Available one of the days: 09/15 - 09/16',
		},
		{
			id: uuidv4(),
			name: 'Daily pass',
			customer: 'Jane Smith',
			order: 'Available one of the days: 09/15 - 09/16',
		},
	];

	return (
		<RelatedTickets__Wrapper>
			<RelatedTickets__Title>Relatetd tickets</RelatedTickets__Title>
			<Order__Wrapper>
				{orders.map((order) => (
					<OrderedTicket order={order} key={order.id} />
				))}
				</Order__Wrapper>
		</RelatedTickets__Wrapper>
	);
};
