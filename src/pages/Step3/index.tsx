import { EventCard } from '~components/EventCard';
import { Steps } from '~components/Stepper';
import { Step3Form } from './Step3Form';
import { ButtonsForm } from '~components/ButtonsForm';

export const Step3 = () => {
	return (
		<>
			<EventCard />
			<Steps activeStep={3} />
			<Step3Form />
			<ButtonsForm />
		</>
	);
};
