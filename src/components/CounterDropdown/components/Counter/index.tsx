import { Dispatch, SetStateAction } from 'react';
import { Counter__Button, Counter__Calc, Counter__Count, Counter__Price, Counter__Wrapper } from './styled';
import decreaseImage from '~assets/minus.svg';
import increaseImage from '~assets/plus.svg';
import { SpectatorT } from '~interfaces/spectator.type';
type PropsT = {
	price: number;
	count: number;
	spectatorId: string;
	ticketId: string;
	setSpectators: Dispatch<SetStateAction<SpectatorT[]>>;
};
export const Counter = ({ price, count, setSpectators, spectatorId, ticketId }: PropsT) => {
	return (
		<Counter__Wrapper>
			<Counter__Price $isEmpty={count === 0}>${price * (count || 1)}</Counter__Price>
			<Counter__Calc>
				<Counter__Button
					onClick={(e) => {
						e.preventDefault();
						setSpectators((prev) => {
							return prev.map((s) => {
								if (s.id === spectatorId) {
									const ticket = s.tickets.find((t) => t.id === ticketId)!;
									ticket.count = ticket.count > 0 ? ticket.count - 1 : ticket.count;
								}
								return s;
							});
						});
					}}
				>
					<img src={decreaseImage} alt='increase' />
				</Counter__Button>
				<Counter__Count>{count}</Counter__Count>
				<Counter__Button
					onClick={(e) => {
						e.preventDefault();

						setSpectators((prev) => {
							return prev.map((s) => {
								if (s.id === spectatorId) {
									const ticket = s.tickets.find((t) => t.id === ticketId)!;
									ticket.count = ticket.count + 1;
								}
								return s;
							});
						});
					}}
				>
					<img src={increaseImage} alt='decrease' />
				</Counter__Button>
			</Counter__Calc>
		</Counter__Wrapper>
	);
};
