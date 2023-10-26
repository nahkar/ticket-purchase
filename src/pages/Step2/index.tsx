import { EventCard } from '~components/EventCard';
import { Steps } from '~components/Stepper';
import { Step2Form } from './Step2Form';
import { ButtonsForm } from '~components/ButtonsForm';

export const Step2 = () => {
	return (
		<>
			<EventCard />
			<Steps activeStep={2} />
			<Step2Form />
			<ButtonsForm />
		</>
	);
};
