import {
	TicketDescription__DescribeList,
	TicketDescription__DescribeListItem,
	TicketDescription__DescribeListItemKey,
	TicketDescription__DescribeListItemValue,
	TicketDescription__DescribeText,
	TicketDescription__DescribeTitle,
	TicketDescription__DescribeWrapper,
	TicketDescription__QrWrapper,
	TicketDescription__WalletBtn,
	TicketDescription__Wrapper,
} from './styled';
import qrCodeIcon from '~assets/qr-big-icon.svg';
import ticketIcon from '~assets/ticket-icon.svg';
import walletIcon from '~assets/wallet-icon.svg';

export const TicketDescription = () => {
	return (
		<TicketDescription__Wrapper>
			<TicketDescription__QrWrapper>
				<h2>John Smith</h2>
				<img src={qrCodeIcon} alt='qr code' />
				<TicketDescription__WalletBtn>
					<img src={walletIcon} alt='apple wallet' /> Add to Apple Wallet
				</TicketDescription__WalletBtn>
				<p>
					Present this QR code on a mobile device along with a Government photo ID to gain entry. Adults will NOT be
					admitted without a corresponding ID. Minors without ID must accompany adults to enter.
				</p>
			</TicketDescription__QrWrapper>
			<TicketDescription__DescribeWrapper>
				<TicketDescription__DescribeTitle>
					Daily pass <img src={ticketIcon} alt='ticket' />
				</TicketDescription__DescribeTitle>
				<TicketDescription__DescribeText>
					Daily pass good for entire day on available <br /> date listed below
				</TicketDescription__DescribeText>
				<TicketDescription__DescribeList>
					<TicketDescription__DescribeListItem>
						<TicketDescription__DescribeListItemKey>Available Dates</TicketDescription__DescribeListItemKey>
						<TicketDescription__DescribeListItemValue>All days</TicketDescription__DescribeListItemValue>
					</TicketDescription__DescribeListItem>
					<TicketDescription__DescribeListItem>
						<TicketDescription__DescribeListItemKey>Pass barcode</TicketDescription__DescribeListItemKey>
						<TicketDescription__DescribeListItemValue>174-524-471</TicketDescription__DescribeListItemValue>
					</TicketDescription__DescribeListItem>
					<TicketDescription__DescribeListItem>
						<TicketDescription__DescribeListItemKey>Email</TicketDescription__DescribeListItemKey>
						<TicketDescription__DescribeListItemValue>mail@gmail.com</TicketDescription__DescribeListItemValue>
					</TicketDescription__DescribeListItem>
					<TicketDescription__DescribeListItem>
						<TicketDescription__DescribeListItemKey>Phone</TicketDescription__DescribeListItemKey>
						<TicketDescription__DescribeListItemValue>555 555 1234</TicketDescription__DescribeListItemValue>
					</TicketDescription__DescribeListItem>
					<TicketDescription__DescribeListItem>
						<TicketDescription__DescribeListItemKey>Zip code</TicketDescription__DescribeListItemKey>
						<TicketDescription__DescribeListItemValue>28806</TicketDescription__DescribeListItemValue>
					</TicketDescription__DescribeListItem>
					<TicketDescription__DescribeListItem>
						<TicketDescription__DescribeListItemKey>Purchased</TicketDescription__DescribeListItemKey>
						<TicketDescription__DescribeListItemValue>Mar 14, 2023, 08:29 AM</TicketDescription__DescribeListItemValue>
					</TicketDescription__DescribeListItem>
					<TicketDescription__DescribeListItem>
						<TicketDescription__DescribeListItemKey>Price</TicketDescription__DescribeListItemKey>
						<TicketDescription__DescribeListItemValue>$15.00</TicketDescription__DescribeListItemValue>
					</TicketDescription__DescribeListItem>
				</TicketDescription__DescribeList>
			</TicketDescription__DescribeWrapper>
		</TicketDescription__Wrapper>
	);
};
