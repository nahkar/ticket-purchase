import { EventCard } from '~components/EventCard';
import { ContainerStyled } from '~styles/shared';
import paymentSuccessLogo from '~assets/payment-success-logo.svg';
import {
	PaymentSuccess__Description,
	PaymentSuccess__Footer,
	PaymentSuccess__Header,
	PaymentSuccess__SubDescription,
	PaymentSuccess__Title,
	PaymentSuccess__Wrapper,
} from './styled';
import { OrderedItem } from '~components/OrderedItem';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
export const PaymentSuccess = () => {
	const countPrice = '64';
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
			<PaymentSuccess__Wrapper>
				<PaymentSuccess__Header>
					<img src={paymentSuccessLogo} alt='payment success' />
					<PaymentSuccess__Title>Payment of ${parseFloat(countPrice).toFixed(2)} was successful.</PaymentSuccess__Title>
					<PaymentSuccess__Description>
						A link to your tickets has been sent to john.smith@gmail.com from sportwrench.com.
					</PaymentSuccess__Description>
					<PaymentSuccess__SubDescription>
						Click a name to view related tickets, share them, or add them to your digital wallet
					</PaymentSuccess__SubDescription>
				</PaymentSuccess__Header>
				{orders.map((order) => (
					<OrderedItem order={order} key={order.id} />
				))}
				<PaymentSuccess__Footer>
					<p>For questions about your tickets, contact <Link to={'/'}>event support</Link></p>
					<p>To view your purchases  visit <Link to={'/'}>Sportwrench Ticketing</Link></p>
				</PaymentSuccess__Footer>
			</PaymentSuccess__Wrapper>
		</ContainerStyled>
	);
};
