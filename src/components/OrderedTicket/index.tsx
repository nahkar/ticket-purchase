import { OrderedTicket__Name, OrderedTicket__Order, OrderedTicket_Wrapper } from './styled';
import qrIcon from '~assets/qr-small-icon.svg';
import { Box } from '@mui/material';
import { OrderT } from '~interfaces/order.type';
import { Link } from 'react-router-dom';

type PropsT = {
	order: OrderT;
	isSingleTicket?: boolean;
};
export const OrderedTicket = ({ isSingleTicket, order: { id, name, order, customer } }: PropsT) => {
	return (
		<OrderedTicket_Wrapper $isSingleTicket={isSingleTicket}>
			<Box sx={{ display: 'flex' }}>
				<img src={qrIcon} alt='qr code' />
				<Box sx={{ marginLeft: '16px' }}>
					{customer ? (
						<OrderedTicket__Name>{customer}</OrderedTicket__Name>
					) : (
						<OrderedTicket__Name>
							<Link to={`/ticket/${id}`}>{name} </Link>
						</OrderedTicket__Name>
					)}
				</Box>
			</Box>
			{customer ? (
				<Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
					<OrderedTicket__Order style={{ fontSize: '16px' }}>{name}</OrderedTicket__Order>
					<OrderedTicket__Order style={{ fontSize: '14px' }}>{order}</OrderedTicket__Order>
				</Box>
			) : (
				<OrderedTicket__Order>{order}</OrderedTicket__Order>
			)}
		</OrderedTicket_Wrapper>
	);
};
