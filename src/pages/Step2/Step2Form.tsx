import { CounterDropdown } from '~components/CounterDropdown';
import { Spectator } from '~components/Spectator';
import { AddNewSpectatorBtn, Form__Row, Form__TextField, Form__Wrapper } from '~styles/shared';
import plusIcon from '~assets/plus.svg';
import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SpectatorT } from '~interfaces/spectator.type';
import { Step2Form__Wrapper } from './styledForm';

export const Step2Form = () => {
	const getNewTickets = () => {
		return [
			{
				id: uuidv4(),
				title: 'Daily',
				subTitle: 'Available one of the days:',
				subTitle2: '09/15 - 09/16',
				count: 5,
				price: 15,
			},
			{
				id: uuidv4(),
				title: 'Friday',
				subTitle: 'Available: 09/15:',
				count: 10,
				price: 20,
			},
			{
				id: uuidv4(),
				title: 'Weekly',
				subTitle: 'Available: All days',
				count: 15,
				price: 30,
			},
		];
	};
	const [spectators, setSpectators] = useState<SpectatorT[]>([
		{ id: uuidv4(), first_name: 'John', last_name: 'Doe', tickets: [...getNewTickets()] },
	]);

	const onAddSpectator = useCallback(() => {
		setSpectators((prev) => {
			const id = uuidv4();
			return [...prev, { id, first_name: '', last_name: '', tickets: [...getNewTickets()] }];
		});
	}, []);

	const onDeleteSpectator = useCallback(
		(id: string) => {
			setSpectators((prev) => prev.filter((spectator) => spectator.id !== id));
		},
		[spectators]
	);

	return (
		<Step2Form__Wrapper>
			{spectators.map(({ id, first_name, last_name }, index) => (
				<Spectator
					key={id}
					label={`Spectator ${index + 1}`}
					onClear={() => {
						setSpectators((prev) =>
							prev.map((spectator) => {
								if (spectator.id === id) {
									spectator.first_name = '';
									spectator.last_name = '';
									spectator.tickets = [...getNewTickets()];
								}
								return spectator;
							})
						);
					}}
					onDelete={() => onDeleteSpectator(id)}
				>
					<Form__Wrapper noValidate autoComplete='off' $mb={0}>
						<Form__Row>
							<Form__TextField
								label='First name'
								$width={228}
								value={first_name}
								onChange={(e) => {
									const { value } = e.target;
									setSpectators((prev) =>
										prev.map((spectator) => {
											if (spectator.id === id) {
												spectator.first_name = value;
											}
											return spectator;
										})
									);
								}}
							/>
							<Form__TextField
								label='Last name'
								$width={228}
								value={last_name}
								onChange={(e) => {
									const { value } = e.target;
									setSpectators((prev) =>
										prev.map((spectator) => {
											if (spectator.id === id) {
												spectator.last_name = value;
											}
											return spectator;
										})
									);
								}}
							/>
							<CounterDropdown
								placeholder='Select ticket(s)'
								spectator={spectators.find((s) => s.id === id)!}
								setSpectators={setSpectators}
							/>
						</Form__Row>
					</Form__Wrapper>
				</Spectator>
			))}

			<AddNewSpectatorBtn onClick={onAddSpectator}>
				<img src={plusIcon} alt='plus' /> Add new
			</AddNewSpectatorBtn>
		</Step2Form__Wrapper>
	);
};
