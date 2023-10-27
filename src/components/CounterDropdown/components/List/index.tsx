import { SpectatorT } from '~interfaces/spectator.type';
import { Counter } from '../Counter';
import {
	List__Description,
	List__Item,
	List__Main,
	List__SubTitle,
	List__Title,
	List__TotalValue,
	List__Wrapper,
} from './styled';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { Overlay } from '~components/Overlay';

type PropsT = {
	isOpen: boolean;
	spectator: SpectatorT;
	setSpectators: Dispatch<SetStateAction<SpectatorT[]>>;
	clickHandler: () => void;
};

const variants = {
	open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
	closed: { opacity: 0, y: '-100%', transition: { duration: 0.2 } },
};

export const List = ({ isOpen, spectator, setSpectators, clickHandler }: PropsT) => {
	return (
		<motion.div animate={isOpen ? 'open' : 'closed'} variants={variants}>
			<List__Wrapper $isOpen={isOpen}>
				<List__Main>
					{spectator.tickets.map((ticket) => (
						<List__Item key={ticket.id}>
							<List__Description>
								<List__Title>{ticket.title}</List__Title>
								<List__SubTitle>{ticket.subTitle}</List__SubTitle>
								{ticket.subTitle2 && <List__SubTitle>{ticket.subTitle2}</List__SubTitle>}
							</List__Description>
							<Counter
								price={ticket.price}
								count={ticket.count}
								setSpectators={setSpectators}
								spectatorId={spectator.id}
								ticketId={ticket.id}
							/>
						</List__Item>
					))}
					<List__Item>
						<List__Title>Total</List__Title>
						<List__TotalValue>
							${spectator.tickets.reduce((acc, ticket) => acc + ticket.price * ticket.count, 0)}
						</List__TotalValue>
					</List__Item>
				</List__Main>
				{isOpen && <Overlay clickHandler={clickHandler} />}
			</List__Wrapper>
		</motion.div>
	);
};
