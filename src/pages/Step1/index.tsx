import { EventCard } from '~components/EventCard';
import { Steps } from '~components/Stepper';
import { Step1Form } from './Step1Form';
import { ButtonsForm } from '~components/ButtonsForm';

export const Step1 = () => {
	return (
		<>
			<EventCard />
			<Steps activeStep={1} />
			<Step1Form />
			<ButtonsForm />
		</>
	);
};
