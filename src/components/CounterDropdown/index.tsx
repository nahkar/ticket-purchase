import {
	CounterDropdown__Arrow,
	CounterDropdown__Main,
	CounterDropdown__Placeholder,
	CounterDropdown__Wrapper,
} from './styled';
import arrowBottom from '~assets/arrow-bottom.svg';
import arrowTop from '~assets/arrow-top.svg';
import { Dispatch, SetStateAction, useState } from 'react';
import { List } from './components/List';
import { SpectatorT } from '~interfaces/spectator.type';

type PropsT = {
	placeholder?: string;
	spectator: SpectatorT;
	setSpectators: Dispatch<SetStateAction<SpectatorT[]>>
};

export const CounterDropdown = ({ placeholder, spectator, setSpectators }: PropsT) => {
	const [isOpen, setIsOpen] = useState(false);

	const clickHandler = () => {
		setIsOpen((prev) => !prev);
	};


	return (
		<CounterDropdown__Wrapper $isOpen={isOpen}>
			<CounterDropdown__Main onClick={clickHandler} className='counter-dropdown'>
				<CounterDropdown__Arrow src={isOpen ? arrowTop : arrowBottom} alt='arrow' />
				<CounterDropdown__Placeholder>{placeholder}</CounterDropdown__Placeholder>
			</CounterDropdown__Main>
			{isOpen && <List isOpen={isOpen} spectator={spectator} setSpectators={setSpectators} clickHandler={clickHandler}/>}
		</CounterDropdown__Wrapper>
	);
};
