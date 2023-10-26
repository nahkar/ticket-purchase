import { Link } from 'react-router-dom';
import { OrderedItem__Name, OrderedItem__Order, OrderedItem__Wrapper } from './styled';

import qrIcon from '~assets/qr-small-icon.svg';
import shareicon from '~assets/share-icon.svg';
import { Box } from '@mui/material';
import { OrderT } from '~interfaces/order.type';

type PropsT = {
	order: OrderT;
};
export const OrderedItem = ({ order: { id, name, order } }: PropsT) => {
	return (
		<OrderedItem__Wrapper>
			<Box sx={{ display: 'flex' }}>
				<img src={qrIcon} alt='qr code' />
				<Box sx={{ marginLeft: '16px' }}>
					<OrderedItem__Name>
						<Link to={`/orders/${id}`}>{name}</Link>
					</OrderedItem__Name>
					<OrderedItem__Order>{order}</OrderedItem__Order>
				</Box>
			</Box>
			<Link to='/'>
				<img src={shareicon} alt='share' />
			</Link>
		</OrderedItem__Wrapper>
	);
};
